import { Journal } from "../Models/journal.model";
import { client } from "../Service/openAIClient";
import { apiError } from "../Utils/apiError";
import { apiResponse } from "../Utils/apiResponse";
import { asyncHandler } from "../Utils/asyncHandler";
import { groupByDay, getMoodCategory, groupByWeek } from "../Helper/chart.helper.js";

function processData(entries, type) {
    const moodCounts = { Happy: 0, Excited: 0, Neutral: 0, Stressed: 0, Sad: 0 };

    entries.forEach(e => {
        const category = getMoodCategory(e.moodLevel);
        moodCounts[category]++;
    });

    const totalMoods = entries.length;
    const moodPie = Object.fromEntries(
        Object.entries(moodCounts)
            .filter(([_, count]) => count > 0)
            .map(([key, count]) => [key, ((count / totalMoods) * 100).toFixed(2)])
    );

    let moodLine = [];
    if (type === "weekly") {
        moodLine = groupByDay(entries, "moodLevel");
    } else {
        moodLine = groupByWeek(entries, "moodLevel");
    }

    let energyBar = [];
    if (type === "weekly") {
        energyBar = groupByDay(entries, "energyLevel");
    } else {
        energyBar = groupByWeek(entries, "energyLevel");
    }

    const stressSum = entries.reduce((sum, e) => sum + e.stressLevel, 0);
    const stressAvg = totalMoods > 0 ? stressSum / totalMoods : 0;

    return {
        moodPie,
        moodLine,
        energyBar,
        stressGauge: stressAvg.toFixed(2),
    };
}


const chartData = asyncHandler(async (req, res) => {
    const { type } = req.params;
    if(!type) throw new apiError(400,"Days type is required");

    const userId = req.user.id;
    if(!userId) throw new apiError(401,"User is not authenticated");

    const data ={};

    if (type === "weekly") {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 6);

        const entries = await Journal.find({
            userId,
            date: { $gte: startDate, $lte: endDate },
        });

        data = processData(entries, "weekly");
    } else {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 27);

        const entries = await Journal.find({
            userId,
            date: { $gte: startDate, $lte: endDate },
        });
        data = processData(entries, "monthly");
    }

    return res
        .status(200)
        .json(new apiResponse(200, {
            data: data
        }, "Data fetched successfully"));
});

const journalAnalysis = asyncHandler(async (req, res) => {
    const userId = req.user?._id;
    if (!userId) throw new apiError(400, "User is not authenticated")

    const { journal } = req.body;
    if (!journal) throw new apiError(401, "Jounral message is required!")

    const completion = client.chat.completions.create({
        model: "gpt-4o-mini",
        response_format: { type: "json_object" },
        messages: [
            {
                role: "system",
                content: `
                You are an AI journalling assistant.
                Always respond with JSON in this Schema:{
                "moodLevel":number(1-10),
                "stressLevel":number(1-10),
                "energyLevel":number(1-10),
                "keyInsights":["String","String","String"]
                }`
            }, {
                role: "user",
                content: journal
            }
        ],
    });

    const result = JSON.parse((await completion).choices[0].message.content);

    if (!result) throw new apiError(500, "Unable to process Journal")

    const newEntry = await Journal.create({
        user: userId,
        moodLevel: result.moodLevel,
        stressLevel: result.stressLevel,
        energyLevel: result.energyLevel,
        keyInsights: result.keyInsights,
        JournalEntry: journal
    })

    if (!newEntry) throw new apiError(500, "Unable to store data in the Journal model");

    return res
        .status(200)
        .JSON(new apiResponse(200, {
            result: result,
            journalEntry: newEntry
        }, "Insights fetched successfully"))
});

const journalHistory = asyncHandler(async (req, res) => {
    const userId = req.user?._id;
    if (!userId) throw new apiError(400, "User is not authenticated");

    const { page, limit } = req.query;
    if (!limit || !page) throw new apiError(401, "Limit and page both are required");

    const offset = (page - 1) * limit;

    const journal = await Journal.find({ journalEntry, moodLevel }).skip(offset).limit(limit);

    if (!journal) throw new apiError(500, "Unable to fetch the journals");

    return res
        .status(200)
        .json(new apiResponse(200, {
            journal: journal
        }, "Entries fetched successfully"))

});

const exportJournalPDF = asyncHandler(async (req, res) => {

});

export {
    chartData, journalAnalysis, journalHistory, exportJournalPDF
}
