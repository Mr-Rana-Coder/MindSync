import { useEffect, useState } from 'react'
import MoodDistribution from '../../Components/MoodDistribution/MoodDistribution';
import MoodTimeline from '../../Components/MoodTimeline/MoodTimeline';
import StressMeter from '../../Components/RecentEntries/RecentEntries';
import EnergyLevels from '../../Components/EnergyLevels/EnergyLevels';
import { api } from '../../Api/baseApi';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("weekly");
    const [chartData, setChartData] = useState(null);

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
    },[activeTab]);

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
                    <button className="bg-white h-10 w-30 rounded-md border-2 border-gray-200 text-gray-700 font-medium hover:bg-gray-200 hover:cursor-pointer transition-transform duration-200 transform hover:scale-110 flex justify-center items-center"><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg></span><span className='pl-1'>Export</span></button>
                </div>
            </div>

            {/* Mood Distribution and Timeline Componenet */}
            <div className='flex pt-10'>
                {chartData && <MoodDistribution data={chartData} />}
                {chartData && <MoodTimeline data={chartData} activeTab = {activeTab}/>}
            </div>

            <div className='flex pt-10'>
                {chartData && <StressMeter data={chartData} />}
                {chartData && <EnergyLevels data={chartData} activeTab = {activeTab} />}
            </div>
        </div>
    )
}

export default Dashboard