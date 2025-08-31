import mongoose  from "mongoose";

const journalSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    moodLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    stressLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    energyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    keyInsights: {
        type: [String],
        validate: function (val) {
            return val.length <= 5;
        },
        message: "You can store upto 5 insights only"
    },
    journalEntry: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true
})

const Journal = mongoose.model("Journal", journalSchema);

export { Journal }