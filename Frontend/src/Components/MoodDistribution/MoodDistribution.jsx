import { useEffect, useState } from "react";
import DashboardPieChart from "../PieChart/DashboardPieChart"

const MoodDistribution = (props) => {
    const pieChartData = props.data.moodPie;

    const moods = ["Happy", "Excited", "Neutral", "Stressed", "Sad"];
    const colors = ["bg-gray-200", "bg-gray-300", "bg-gray-500", "bg-gray-600", "bg-gray-800"];

    return (
        <div className='w-130 h-135 rounded-xl bg-white ml-10'>
            <div className='flex justify-between pt-6 mx-5'>
                <p className='font-sans font-medium text-xl text-gray-800'>Mood Distribution</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4f4f4f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-pie-icon lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" /><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /></svg></p>
            </div>

            <div className='flex justify-center items-center mt-7'>
                <div className='rounded-full h-70 w-70'>
                    <DashboardPieChart pieChartPassedData={props.data.moodPie} />
                </div>
            </div>

            <div className="mt-4">
                {moods.map((mood, index) => (
                    <div key={mood} className="flex justify-between mx-5 mt-2">
                        <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full ${colors[index]}`}></div>
                            <p className="pl-2 font-sans font-medium text-md text-gray-800">{mood}</p>
                        </div>
                        <p className="font-sans font-medium text-md text-gray-800">
                            {Math.floor(Number(pieChartData?.[mood] ?? 0))}%
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default MoodDistribution