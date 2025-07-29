import React, { useState } from 'react'

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("weekly");

    return (
        <div className='w-full h-370 bg-gray-100'>
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

            <div className='flex pt-10'>
                <div className='w-130 h-130 rounded-xl bg-white ml-10'>
                    <div className='flex justify-between pt-6 mx-5'>
                        <p className='font-sans font-medium text-xl text-gray-800'>Mood Distribution</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4f4f4f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-pie-icon lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" /><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /></svg></p>
                    </div>

                    <div className='flex justify-center items-center mt-7'>
                        <div className='rounded-full bg-gray-200 h-70 w-70'>
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-between mx-5 mt-4'>
                            <div className='flex items-center'>
                                <div className='w-4 h-4 rounded-full bg-gray-800'></div>
                                <p className='pl-2 font-sans font-medium text-md text-gray-800'>Happy</p>
                            </div>
                            <p className='font-sans font-medium text-md text-gray-800'>35%</p>
                        </div>
                        <div className='flex justify-between mx-5 mt-2'>
                            <div className='flex items-center'>
                                <div className='w-4 h-4 rounded-full bg-gray-600'></div>
                                <p className='pl-2 font-sans font-medium text-md text-gray-800'>Neutral</p>
                            </div>
                            <p className='font-sans font-medium text-md text-gray-800'>28%</p>
                        </div>

                        <div className='flex justify-between mx-5 mt-2'>
                            <div className='flex items-center'>
                                <div className='w-4 h-4 rounded-full bg-gray-400'></div>
                                <p className='pl-2 font-sans font-medium text-md text-gray-800'>Calm</p>
                            </div>
                            <p className='font-sans font-medium text-md text-gray-800'>22%</p>
                        </div>
                        <div className='flex justify-between mx-5 mt-2'>
                            <div className='flex items-center'>
                                <div className='w-4 h-4 rounded-full bg-gray-200'></div>
                                <p className='pl-2 font-sans font-medium text-md text-gray-800'>Sad</p>
                            </div>
                            <p className='font-sans font-medium text-md text-gray-800'>15%</p>
                        </div>
                    </div>
                </div>
                <div className='w-262 h-105 rounded-xl bg-white ml-10'>
                    <div className='flex justify-between pt-6 mx-5'>
                        <p className='font-sans font-medium text-xl text-gray-800'>Mood Distribution</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4f4f4f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-pie-icon lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" /><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /></svg></p>
                        <div className='bg-black'>
                            <select>
                                <option value="volvo" > Last 7 Days</option>
                                <option value="saab"> Last Month</option>
                                <option value="fiat">Last Year</option>
                                <option value="audi">All</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-center pt-8 '>
                <div className='w-1/3 h-50 bg-white rounded-xl mr-5 ml-10'>

                </div>
                <div className='w-1/3 h-50 bg-white rounded-xl mr-5 ml-2'>

                </div>
                <div className='w-1/3 h-50 bg-white rounded-xl mr-10 ml-2'>

                </div>
            </div>

            <div className='w-403 h-120 bg-white ml-10 mt-8 rounded-xl'>

            </div>
        </div>
    )
}

export default Dashboard