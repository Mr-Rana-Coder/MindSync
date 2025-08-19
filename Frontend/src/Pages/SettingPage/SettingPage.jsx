import React from 'react'

const SettingPage = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-280 h-135 border-2 border-gray-300 mt-5 shadow-md rounded-md'>
                <p className='pt-5 font-medium font-sans text-gray-800 text-3xl text-center'>Profile Information</p>
                <div className='flex justify-center items-center'>
                    <div className=' pt-4 mr-15'>
                        <p className='font-sans font-medium text-xl text-gray-600 pb-2'>First Name</p>
                        <input type="text" className='border-1 border-gray-300 shadow-sm rounded-sm w-100 h-10 outline-none pl-3 font-sans font-medium text-gray-800' />
                    </div>
                    <div className='pt-4 ml-15'>
                        <p className='font-sans font-medium text-xl text-gray-600 pb-2'>Last Name</p>
                        <input type="text" className='border-1 border-gray-300 shadow-sm rounded-sm w-100 h-10 outline-none pl-3 font-sans font-medium text-gray-800' />
                    </div>
                </div>

                <div className='pt-6 ml-25'>
                    <p className='font-sans font-medium text-gray-600 text-xl pb-2'>Email Address</p>
                    <input type="text" className='border-1 border-gray-300 shadow-sm rounded-sm w-230 h-10 outline-none pl-3 font-sans font-medium text-gray-800' />
                </div>

                <div className='pt-6 ml-25'>
                    <p className='font-sans font-medium text-gray-600 text-xl pb-2'>About</p>
                    <input type="text" className='border-1 border-gray-300 shadow-sm rounded-sm w-230 h-30 outline-none pb-20 pl-3 font-sans font-medium text-gray-800' />
                </div>

                <div className='pl-25 pt-2'>
                    <button className='w-70 h-12 flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-[1.02] rounded-md shadow-sm border-1 bg-gray-800 mr-7 mt-5'><span className='pl-2 font-sans font-medium text-white text-md'>Save Changes</span></button>
                </div>
            </div>

            <div className='w-280 h-85 border-2 border-gray-300 mt-8 mb-8 shadow-md rounded-md'>
                <p className='pt-7 font-medium font-sans text-gray-800 text-3xl text-left pl-10'>Settings</p>

                <div className='w-260 h-25 border-2 mx-10 mt-4 rounded-xl border-gray-200'>
                    <div className='flex justify-between items-center mt-1'>
                        <div className='flex items-center mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download" className='mr-3 ml-3'><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
                            <div>
                                
                                <p className='font-sans font-medium text-gray-800 text-xl'>Export Your Data</p>
                                <p className='font-sans font-medium text-gray-600 text-lg'>Download a copy of your data in PDF format </p>
                            </div>
                        </div>
                        <div>
                            <button className='w-50 h-12 flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-[1.02] rounded-md shadow-sm border-1 bg-gray-800 mr-5 mt-5'>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                    <span className='pl-2 font-sans font-medium text-white text-md'>Export PDF</span></div>
                                </button>
                        </div>
                    </div>
                </div>

                <div className='w-260 h-25 border-2 mx-10 mt-4 rounded-xl border-gray-200'>
                    <div className='flex justify-between items-center mt-1'>
                        <div className='flex items-center mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash" className='mr-3 ml-3'><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                            <div>
                                <p className='font-sans font-medium text-gray-800 text-xl'>Delete Account</p>
                                <p className='font-sans font-medium text-gray-600 text-lg'>Permanently delete your account and all data</p>
                            </div>
                        </div>
                        <div>
                            <button className='w-50 h-12 flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-[1.02] rounded-md shadow-sm border-1 bg-gray-800 mr-5 mt-5'>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                    <span className='pl-2 font-sans font-medium text-white text-md'>Delete Account</span></div>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingPage