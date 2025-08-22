import DashboardPieChart from "../PieChart/DashboardPieChart"

const MoodDistribution = () => {
  return (
                <div className='w-130 h-135 rounded-xl bg-white ml-10'>
                    <div className='flex justify-between pt-6 mx-5'>
                        <p className='font-sans font-medium text-xl text-gray-800'>Mood Distribution</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4f4f4f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-pie-icon lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" /><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /></svg></p>
                    </div>

                    <div className='flex justify-center items-center mt-7'>
                        <div className='rounded-full h-70 w-70'>
                            <DashboardPieChart/>
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-between mx-5 mt-2'>
                            <div className='flex items-center'>
                                <div className='w-4 h-4 rounded-full bg-gray-200'></div>
                                <p className='pl-2 font-sans font-medium text-md text-gray-800'>Happy</p>
                            </div>
                            <p className='font-sans font-medium text-md text-gray-800'>20%</p>
                        </div>

                        <div className='flex justify-between mx-5 mt-2'>
                            <div className='flex items-center'>
                                <div className='w-4 h-4 rounded-full bg-gray-300'></div>
                                <p className='pl-2 font-sans font-medium text-md text-gray-800'>Excited</p>
                            </div>
                            <p className='font-sans font-medium text-md text-gray-800'>20%</p>
                        </div>

                        <div className='flex justify-between mx-5 mt-2'>
                            <div className='flex items-center'>
                                <div className='w-4 h-4 rounded-full bg-gray-500'></div>
                                <p className='pl-2 font-sans font-medium text-md text-gray-800'>Neutral</p>
                            </div>
                            <p className='font-sans font-medium text-md text-gray-800'>20%</p>
                        </div>

                        <div className='flex justify-between mx-5 mt-2'>
                            <div className='flex items-center'>
                                <div className='w-4 h-4 rounded-full bg-gray-600'></div>
                                <p className='pl-2 font-sans font-medium text-md text-gray-800'>Stressed</p>
                            </div>
                            <p className='font-sans font-medium text-md text-gray-800'>20%</p>
                        </div>
                        <div className='flex justify-between mx-5 mt-2'>
                            <div className='flex items-center'>
                                <div className='w-4 h-4 rounded-full bg-gray-800'></div>
                                <p className='pl-2 font-sans font-medium text-md text-gray-800'>Sad</p>
                            </div>
                            <p className='font-sans font-medium text-md text-gray-800'>20%</p>
                        </div>
                    </div>
                </div>

  )
}

export default MoodDistribution