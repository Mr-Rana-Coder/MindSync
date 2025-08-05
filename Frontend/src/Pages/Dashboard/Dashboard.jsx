import React, { useState } from 'react'

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("weekly");

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
                    <div className='flex justify-between items-center pt-6 mx-8'>
                        <p className='font-sans font-medium text-xl text-gray-800'>Mood Distribution</p>
                        <div className='flex items-center'>
                            <p className='pr-3'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4f4f4f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-line-icon lucide-chart-line"><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="m19 9-5 5-4-4-3 3" /></svg></p>
                            <select className='w-full px-4 py-2 border-1 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-0  font-medium text-gray-700 bg-white hover:cursor-pointer'>
                                <option value="Day"> Last 7 Days</option>
                                <option value="Month"> Last Month</option>
                                <option value="Year">Last Year</option>
                                <option value="All">All</option>
                            </select>
                        </div>
                    </div>

                    <div className='w-247 h-75 bg-gray-200 ml-7 mt-6 rounded-xl'>
                    </div>
                </div>
            </div>


            <div className='w-403 h-113 bg-white ml-10 mt-8 rounded-xl'>
                <div className='flex justify-between pt-8 mx-8'>
                    <p className='font-sans font-medium text-xl text-gray-800'>Recent Entries</p>
                    <p className='font-sans font-medium text-lg text-gray-600 hover:cursor-pointer hover:text-gray-900'>View All</p>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='bg-gray-100 w-387 h-85 mt-4 rounded-xl'>
                        <div className='flex justify-between items-center pt-7 px-7'>
                            <div className='flex items-center justify-center'>
                                <div className='flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile-icon lucide-smile"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>
                                </div>
                                <div className='pl-3'>
                                    <p className='font-sans font-medium text-gray-800 text-xl'>Happy</p>
                                    <p className='font-sans font-medium text-gray-500 text-lg'>Today, 2:30 PM</p>
                                </div>
                            </div>
                            <div>
                                <p className='font-sans font-medium text-gray-800 text-xl text-end'>8/10</p>
                                <p className='font-sans font-medium text-gray-500 text-xl'>Great Day!</p>
                            </div>
                        </div>
                        <div className="flex justify-center my-6">
                            <hr className="w-370 border-t-2 border-gray-200" />
                        </div>

                        <div className='flex justify-between items-center px-7'>
                            <div className='flex items-center justify-center'>
                                <div className='flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile-icon lucide-smile"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>
                                </div>
                                <div className='pl-3'>
                                    <p className='font-sans font-medium text-gray-800 text-xl'>Neutral</p>
                                    <p className='font-sans font-medium text-gray-500 text-lg'>Today, 2:30 PM</p>
                                </div>
                            </div>
                            <div>
                                <p className='font-sans font-medium text-gray-800 text-xl text-end'>6/10</p>
                                <p className='font-sans font-medium text-gray-500 text-xl'>Average Day</p>
                            </div>
                        </div>
                        <div className="flex justify-center my-6">
                            <hr className="w-370 border-t-2 border-gray-200" />
                        </div>

                        <div className='flex justify-between items-center px-7'>
                            <div className='flex items-center justify-center'>
                                <div className='flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile-icon lucide-smile"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>
                                </div>
                                <div className='pl-3'>
                                    <p className='font-sans font-medium text-gray-800 text-xl'>Excited</p>
                                    <p className='font-sans font-medium text-gray-500 text-lg'>Today, 2:30 PM</p>
                                </div>
                            </div>
                            <div>
                                <p className='font-sans font-medium text-gray-800 text-xl text-end'>9/10</p>
                                <p className='font-sans font-medium text-gray-500 text-xl'>New Project Day!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard