import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userLogin } from "../../Api/auth.api";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../Store/authSlice";


const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const initialMessage = location.state?.successMessage;
    const [successMessage, setSuccessMessage] = useState(initialMessage);

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm({ mode: "onChange" })

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const onSubmit = async (data) => {
        try {
            const response = await userLogin(data);
            dispatch(setCredentials(response))
            navigate("/dashboard");
        } catch (error) {
            setError("loginForm", { message: error.response.data.message })
        }
    }

    return (
        <>
            <div className='flex items-center justify-center py-10 pt-28'>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='rounded-2xl shadow-sm border-1 border-gray-200 text-gray-800 w-110'>
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
                        <input type="email" placeholder='me@example.com' {...register("email", { required: { value: true, message: "The field is required" } })} onChange={(e) => { clearErrors("loginForm") }} className=' w-full h-10 bg-white rounded-sm text-gray-800 font-sans font-medium border border-gray-300 outline-none px-3 shadow-sm' />
                        {errors.email && <div className="font-normal text-sm pt-1 font-sans text-red-600">
                            {errors.email.message}
                        </div>}
                    </div>

                    <div className='p-4'>
                        <div className='flex justify-between pb-2'>
                            <p className='font-medium '>Password</p>
                            <p className='hover:cursor-pointer hover:underline text-gray-900 hover:text-gray-600 font-sans font-medium '>Forgot Your Password ?</p>
                        </div>
                        <input  type="password" placeholder='password' {...register("password", { required: { value: true, message: "The field is required" }, minLength: { value: 8, message: "The minimum length is 8." }, maxLength: { value: 24, message: "The maximum length is 24" } })} onChange={(e) => { clearErrors("loginForm") }} className='bg-white rounded-sm text-gray-800 font-sans font-medium border border-gray-300 outline-none px-3 shadow-sm w-full h-10 p-2' />
                        {errors.password && <div className="font-normal text-sm pt-1 font-sans text-red-600">
                            {errors.password.message}
                        </div>}
                    </div>

                    <div className='mx-4 mt-2 mb-7'>
                        <div className='pb-2'>
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className='rounded-md shadow-sm border-1 w-full h-10 text-white bg-gray-800 font-medium hover:cursor-pointer transition-transform transform hover:scale-[1.02] hover:bg-gray-900'>Sign In</button>
                            {
                                successMessage && <div className="font-normal text-sm pt-1 font-sans text-green-600 text-center">
                                    {successMessage}
                                </div>
                            }
                            {errors.loginForm && <div className="font-normal text-sm pt-1 font-sans text-red-600 text-center">
                                {errors.loginForm.message}
                            </div>}
                        </div>

                        <div className='flex pt-4'>
                            <button className='w-1/2 h-10 flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-[1.02] rounded-md shadow-sm border-1 border-gray-300 mr-2'><img src="https://registry.npmmirror.com/@lobehub/icons-static-png/1.56.0/files/dark/google-color.png" alt="Not Available" className='w-5 h-5' /><span className='pl-2 font-sans font-medium text-gray-800 text-md'>Google</span></button>
                            <button className='w-1/2 h-10 flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-[1.02] rounded-md shadow-sm border-1 border-gray-300 ml-1'><img src="https://www.svgrepo.com/show/503173/apple-logo.svg" alt="Not Available" className='w-5 h-5' /><span className='pl-2 font-sans font-medium text-gray-800 text-md'>Apple</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn;