import { useNavigate } from "react-router-dom";


const SignIn = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='flex items-center justify-center py-10 pt-28'>

                <div className='rounded-2xl shadow-sm border-1 border-gray-200 text-gray-800 w-110'>
                    <div className='flex justify-center pt-7'>
                        <div className="h-12 w-12 bg-gray-900 rounded-md flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-icon lucide-brain"><path d="M12 18V5" /><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" /><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" /><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" /><path d="M18 18a4 4 0 0 0 2-7.464" /><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" /><path d="M6 18a4 4 0 0 1-2-7.464" /><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" /></svg>
                        </div>
                    </div>

                    <div className='pt-4'>
                        <p className='font-medium font-sans text-center text-3xl text-gray-800 '>Sign in to your Account</p>
                        <p className=' font-medium font-sans text-center text-lg text-gray-600 pt-1'> Or <span className='font-medium font-sans text-center text-sm text-gray-900 hover:underline hover:text-gray-600 hover:cursor-pointer' onClick={() => { navigate("/signup") }}>Create new Account</span></p>
                    </div>

                    <div className='pt-5 mx-4'>
                        <p className='pb-2 font-medium'>Email</p>
                        <input type="text" placeholder='me@example.com' className=' w-full h-10 bg-white rounded-sm text-gray-800 font-sans font-medium border border-gray-300 outline-none px-3 shadow-sm' />
                    </div>

                    <div className='p-4'>
                        <div className='flex justify-between pb-2'>
                            <p className='font-medium '>Password</p>
                            <p className='hover:cursor-pointer hover:underline text-gray-900 hover:text-gray-600 font-sans font-medium '>Forgot Your Password ?</p>
                        </div>
                        <input type="text" placeholder='password' className='bg-white rounded-sm text-gray-800 font-sans font-medium border border-gray-300 outline-none px-3 shadow-sm w-full h-10 p-2' />
                    </div>

                    <div className='mx-4 mt-2 mb-7'>
                        <div className='pb-2'>
                            <button className='rounded-md shadow-sm border-1 w-full h-10 text-white bg-gray-800 font-medium hover:cursor-pointer transition-transform transform hover:scale-[1.02] hover:bg-gray-900'>Sign In</button>
                        </div>

                        <div className='flex pt-4'>
                            <button className='w-1/2 h-10 flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-[1.02] rounded-md shadow-sm border-1 border-gray-300 mr-2'><img src="https://registry.npmmirror.com/@lobehub/icons-static-png/1.56.0/files/dark/google-color.png" alt="Not Available" className='w-5 h-5' /><span className='pl-2 font-sans font-medium text-gray-800 text-md'>Google</span></button>
                            <button className='w-1/2 h-10 flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-[1.02] rounded-md shadow-sm border-1 border-gray-300 ml-1'><img src="https://www.svgrepo.com/show/503173/apple-logo.svg" alt="Not Available" className='w-5 h-5' /><span className='pl-2 font-sans font-medium text-gray-800 text-md'>Apple</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;