import React from 'react'

const SendMessage = () => {
    return (
        <div className=' flex justify-center items-center'>
            <div className='w-170 h-135 rounded-md bg-white mt-7 mb-15'>
                <p className='text-center font-sans font-medium text-3xl text-gray-800 pt-4'>Send Us Message</p>
                <div className='flex'>
                    <div className="pt-1 pl-6 w-full">
                        <p className="font-sans font-normal text-lg text-gray-700 pt-4 pb-1">First Name</p>
                        <input
                            type="text"
                            placeholder="Sahil"
                            className="w-75 h-10 px-3 bg-white rounded-sm border border-gray-300 outline-none shadow-sm font-sans font-medium text-gray-800"
                        />
                    </div>
                    <div className="pt-4 pl-2 w-full">
                        <p className="font-sans font-normal text-lg text-gray-700 pt-1 pb-1">Last Name</p>
                        <input
                            type="text"
                            placeholder="Rana"
                            className="w-75 h-10 px-3 bg-white rounded-sm font-sans font-medium text-gray-800 border border-gray-300 outline-none shadow-sm"
                        />
                    </div>
                </div>
                <div className='pl-6 w-full'>
                    <p className='font-sans font-normal text-lg text-gray-700 pt-4 pb-1'>Email</p>
                    <input type="text" placeholder='abc@gmail.com' className=' w-157 h-10 bg-white rounded-sm font-sans font-medium text-gray-800 border border-gray-300 outline-none px-3 shadow-sm' />
                </div>

                <div className="pl-6 w-full">
                    <p className="font-sans font-normal text-lg text-gray-700 pt-4 pb-1">Message</p>
                    <textarea
                        placeholder="Tell us about the problem . . ."
                        className="w-157 h-40 bg-white rounded-sm font-sans font-medium text-gray-800 border border-gray-300 outline-none p-2 resize-none shadow-sm"
                    />
                </div>

                <div className='flex justify-center pt-5'>
                    <button className='w-full h-12 rounded-md bg-gray-800 mx-6 font-sans font-normal text-white text-lg hover:cursor-pointer transition-transform transform hover:scale-[1.02] hover:bg-gray-900'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default SendMessage