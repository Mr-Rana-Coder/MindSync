import { useEffect, useRef, useState } from 'react'
import MoodDistribution from '../../Components/MoodDistribution/MoodDistribution';
import MoodTimeline from '../../Components/MoodTimeline/MoodTimeline';
import StressMeter from '../../Components/RecentEntries/RecentEntries';
import EnergyLevels from '../../Components/EnergyLevels/EnergyLevels';
import { api } from '../../Api/baseApi';
import ExportChart from '../../Components/ExportChart/ExportChart';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("weekly");
    const [chartData, setChartData] = useState(null);
    const moodDistributionRef = useRef(null);
    const moodTimeLineRef = useRef(null);
    const stressMeterRef = useRef(null);
    const energyLevelRef = useRef(null);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/journal/chartData/${activeTab}`);
                if (response.status === 200) {
                    setChartData(response.data.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [activeTab]);

    return (
        <div className='w-full h-310 bg-gray-100'>

            <div className='flex justify-between px-10 pt-8 '>
                <div>
                    <p className='font-medium font-sans text-gray-800 text-2xl'>
                        Your Emotional Journey
                    </p>
                    <p className='font-medium font-sans text-gray-500 text-md pt-2'>
                        Track and visualize your mood patterns over time
                    </p>
                </div>
                <div className='flex'>
                    <div className="inline-flex bg-white rounded-md h-10 mr-3 border-2 shadow-xs border-gray-200">
                        <button
                            onClick={() => setActiveTab("weekly")}
                            className={`px-4 py-1 font-medium rounded-md transition hover:cursor-pointer ${activeTab === "weekly"
                                ? "bg-gray-800 text-white shadow-sm "
                                : "text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            Weekly
                        </button>
                        <button
                            onClick={() => setActiveTab("monthly")}
                            className={`px-4 py-1 font-medium rounded-md transition hover:cursor-pointer ${activeTab === "monthly"
                                ? "bg-gray-800 text-white shadow-sm "
                                : "text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            Monthly
                        </button>
                    </div>
                    <div>
                        <ExportChart
                        moodDistributionRef = {moodDistributionRef}
                        moodTimeLineRef = {moodTimeLineRef}
                        stressMeterRef = {stressMeterRef}
                        energyLevelRef = {energyLevelRef} 
                        />
                    </div>
                </div>
            </div>

            {/* Mood Distribution and Timeline Componenet */}
            <div className='flex pt-10'>
                {chartData && <MoodDistribution ref = {moodDistributionRef} data={chartData} />}
                {chartData && <MoodTimeline ref = {moodTimeLineRef} data={chartData} activeTab={activeTab} />}
            </div>

            <div className='flex pt-10'>
                {chartData && <StressMeter ref = {stressMeterRef} data={chartData} />}
                {chartData && <EnergyLevels ref = {energyLevelRef} data={chartData} activeTab={activeTab} />}
            </div>
        </div>
    )
}

export default Dashboard