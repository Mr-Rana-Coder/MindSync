
const RecentEntries = () => {
    return (
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
    )
}

export default RecentEntries