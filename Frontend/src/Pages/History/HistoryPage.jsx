import React from 'react'

const HistoryPage = () => {
    return (
        <div>
            <div className='pl-10'>
                <p className='font-medium font-sans text-3xl text-gray-800 pb-2'>Journal History</p>
                <p className='font-medium font-sans text-xl text-gray-600'>Review your past jounral entries and track your journey</p>
            </div>

            <div className='pl-10 pt-8 flex justify-between items-center'>
                <div className='flex'>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-64 shadow-sm">
                        <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search entries..."
                            className="outline-none bg-transparent w-full placeholder-gray-400 font-sans font-medium text-gray-800"
                        />
                    </div>

                    <div className='pl-4'>
                        <select className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 font-medium text-gray-700 bg-white hover:cursor-pointer h-12 appearance-auto'>
                            <option value="Happy"> Happy</option>
                            <option value="Neutral"> Neutral</option>
                            <option value="Sad">Sad</option>
                            <option value="Stressed">Stressed</option>
                            <option value="Excited">Excited</option>
                            <option value="All Moods">All Moods</option>
                        </select>
                    </div>
                </div>

                <div className='pr-10'>
                    <p className='font-medium font-sans text-lg text-gray-500'>147 entries total</p>
                </div>
            </div>

            <div className='mx-10 w-407 mb-25 h-200 border-1 rounded-xl border-gray-300 mt-8 shadow-sm'>
                <div className='w-full'>
                    <div className='flex pt-5 pl-5 items-center'>
                        <p className='font-sans font-medium text-md text-gray-800 pr-3'>January 14, 2025</p>
                        <div className='w-15 h-5 font-sans font-medium text-sm text-gray-800 bg-gray-200 rounded-xl flex items-center justify-center'>Happy</div>
                    </div>

                    <div className='font-sans font-medium text-gray-700 text-lg pt-3 pl-5'>
                        Today was and an amazing day ! I finally finished the project i've been working on for weeks . The feeling of accomplishment is incredible and i am very happy...
                    </div>

                    <div className='flex justify-between pt-4 pl-5 items-center'>
                        <p className='font-sans font-medium text-gray-500 text-md'> Word Count: 487</p>
                        <div className='font-sans font-medium text-gray-500 text-md pr-5'>Expand <span></span></div>
                    </div>
                </div>
                <div className="flex justify-center my-6">
                    <hr className="w-410 border-t-2 border-gray-200" />
                </div>

                <div className='w-full'>
                    <div className='flex pl-5 items-center'>
                        <p className='font-sans font-medium text-md text-gray-800 pr-3'>January 14, 2025</p>
                        <div className='w-15 h-5 font-sans font-medium text-sm text-gray-800 bg-gray-200 rounded-xl flex items-center justify-center'>Happy</div>
                    </div>

                    <div className='font-sans font-medium text-gray-700 text-lg pt-3 pl-5'>
                        Today was and an amazing day ! I finally finished the project i've been working on for weeks . The feeling of accomplishment is incredible and i am very happy...
                    </div>

                    <div className='flex justify-between pt-4 pl-5 items-center'>
                        <p className='font-sans font-medium text-gray-500 text-md'> Word Count: 487</p>
                        <div className='font-sans font-medium text-gray-500 text-md pr-5'>Expand <span></span></div>
                    </div>
                </div>
                <div className="flex justify-center my-6">
                    <hr className="w-410 border-t-2 border-gray-200" />
                </div>

                <div className='w-full'>
                    <div className='flex pl-5 items-center'>
                        <p className='font-sans font-medium text-md text-gray-800 pr-3'>January 14, 2025</p>
                        <div className='w-15 h-5 font-sans font-medium text-sm text-gray-800 bg-gray-200 rounded-xl flex items-center justify-center'>Happy</div>
                    </div>

                    <div className='font-sans font-medium text-gray-700 text-lg pt-3 pl-5'>
                        Today was and an amazing day ! I finally finished the project i've been working on for weeks . The feeling of accomplishment is incredible and i am very happy...
                    </div>

                    <div className='flex justify-between pt-4 pl-5 items-center'>
                        <p className='font-sans font-medium text-gray-500 text-md'> Word Count: 487</p>
                        <div className='font-sans font-medium text-gray-500 text-md pr-5'>Expand <span></span></div>
                    </div>
                </div>
                <div className="flex justify-center my-6">
                    <hr className="w-410 border-t-2 border-gray-200" />
                </div>

                <div className='w-full h-30'>
                    <div className='flex pt-5 pl-5 items-center'>
                        <p className='font-sans font-medium text-md text-gray-800 pr-3'>January 14, 2025</p>
                        <div className='w-15 h-5 font-sans font-medium text-sm text-gray-800 bg-gray-200 rounded-xl flex items-center justify-center'>Happy</div>
                    </div>

                    <div className='font-sans font-medium text-gray-700 text-lg pt-3 pl-5'>
                        Today was and an amazing day ! I finally finished the project i've been working on for weeks . The feeling of accomplishment is incredible and i am very happy...
                    </div>

                    <div className='flex justify-between pt-4 pl-5 items-center'>
                        <p className='font-sans font-medium text-gray-500 text-md'> Word Count: 487</p>
                        <div className='font-sans font-medium text-gray-500 text-md pr-5'>Expand <span></span></div>
                    </div>
                </div>
                <div className="flex justify-center my-6">
                    <hr className="w-410 border-t-2 border-gray-200" />
                </div>

                <div className='w-full h-30'>
                    <div className='flex pt-5 pl-5 items-center'>
                        <p className='font-sans font-medium text-md text-gray-800 pr-3'>January 14, 2025</p>
                        <div className='w-15 h-5 font-sans font-medium text-sm text-gray-800 bg-gray-200 rounded-xl flex items-center justify-center'>Happy</div>
                    </div>

                    <div className='font-sans font-medium text-gray-700 text-lg pt-3 pl-5'>
                        Today was and an amazing day ! I finally finished the project i've been working on for weeks . The feeling of accomplishment is incredible and i am very happy...
                    </div>

                    <div className='flex justify-between pt-4 pl-5 items-center'>
                        <p className='font-sans font-medium text-gray-500 text-md'> Word Count: 487</p>
                        <div className='font-sans font-medium text-gray-500 text-md pr-5'>Expand <span></span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HistoryPage;