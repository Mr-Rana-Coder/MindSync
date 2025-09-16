import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { userSignUp } from "../../Api/auth.api";
import { useState } from "react";

const Signup = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "onChange"
    })

    const onSubmit = async (data) => {
        delete data.confirmPassword;
        try {
            const res = await userSignUp(data);
            if (res.statusCode == 201) {

                setTimeout(() => {
                    navigate("/signin", { state: { successMessage: "Account created successfully!" } });
                }, 500);
            }
        } catch (error) {
            setError("signupForm", { message: error.response.data.message });
        }
    };

    const newPassword = watch("password");

    return (
        <div>
            <div className='flex items-center justify-center py-10 pt-15'>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='rounded-2xl shadow-sm border-1 border-gray-200 text-gray-800 w-140'>


                    <div className='flex justify-center pt-7'>
                        <div className="h-12 w-12 bg-gray-900 rounded-md flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-icon lucide-brain"><path d="M12 18V5" /><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" /><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" /><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" /><path d="M18 18a4 4 0 0 0 2-7.464" /><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" /><path d="M6 18a4 4 0 0 1-2-7.464" /><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" /></svg>
                        </div>
                    </div>

                    <div className='pt-4'>
                        <p className='font-medium font-sans text-center text-3xl text-gray-800 '>Create your account</p>
                        <p className=' font-medium font-sans text-center text-lg text-gray-600 pt-1'> Or <span className='font-medium font-sans text-center text-sm text-gray-900 hover:underline hover:text-gray-600 hover:cursor-pointer' onClick={() => (navigate("/signin"))}>Sign in to your Account</span></p>
                    </div>

                    <div className='pt-5 w-full flex gap-4'>
                        <div className="w-1/2 ml-5">
                            <p className='pb-2 font-medium'>*First Name</p>
                            <input type="text" placeholder="First" {...register("firstName", { required: { value: true, message: "The field is required" }, minLength: { value: 3, message: "The minimum length is 3." }, maxLength: { value: 16, message: "The maximum length is 16" } })} className=' w-full h-10 bg-white rounded-sm text-gray-800 font-sans font-medium border border-gray-300 outline-none px-3 shadow-sm' />

                            {errors.firstName && <div className="font-normal text-sm pt-1 font-sans text-red-600">
                                {errors.firstName.message}
                            </div>}
                        </div>

                        <div className="w-1/2 mr-5">
                            <p className='pb-2 font-medium'>Last Name</p>
                            <input type="text" placeholder="Last" {...register("lastName", { required: false, minLength: { value: 3, message: "The minimum length is 3." }, maxLength: { value: 16, message: "The maximum length is 16" } })} className='w-full h-10 bg-white rounded-sm text-gray-800 font-sans font-medium border border-gray-300 outline-none px-3 shadow-sm' />
                            {errors.lastName && <div className="font-normal text-sm pt-1 font-sans text-red-600">
                                {errors.lastName.message}
                            </div>}
                        </div>
                    </div>

                    <div className="pt-3 pl-5 w-full pr-5">
                        <p className='font-medium pb-2'>*Email</p>
                        <input type="email" placeholder='me@example.com' {...register("email", { required: { value: true, message: "The field is required" } })}
                            onChange={(e) => { clearErrors("signupForm") }}
                            className=' w-full h-10 bg-white rounded-sm text-gray-800 font-sans font-medium border border-gray-300 outline-none px-3 shadow-sm' />
                        {errors.email && <div className="font-normal text-sm pt-1 font-sans text-red-600">
                            {errors.email.message}
                        </div>}
                    </div>

                    <div className='pt-3 pl-5 pr-5'>
                        <div className=' pb-2'>
                            <p className='font-medium '>*New Password</p>
                        </div>
                        <input type="password" placeholder='New Password' {...register("password", { required: { value: true, message: "The field is required" }, minLength: { value: 8, message: "The minimum length is 8." }, maxLength: { value: 24, message: "The maximum length is 24" } })} className='bg-white rounded-sm text-gray-800 font-sans font-medium border border-gray-300 outline-none px-3 shadow-sm w-full h-10 p-2' />
                        {errors.password && <div className="font-normal text-sm pt-1 font-sans text-red-600">
                            {errors.password.message}
                        </div>}
                    </div>

                    <div className='pt-3 pl-5 pr-5'>
                        <div className='pb-2'>
                            <p className='font-medium'>*Confirm Password</p>
                        </div>
                        <input type="password" placeholder='Confirm Password' {...register("confirmPassword", { required: { value: true, message: "The field is required" }, minLength: { value: 8, message: "The minimum length is 8." }, maxLength: { value: 24, message: "The maximum length is 24" }, validate: (value) => (value === newPassword || "Password must be same") })} className='bg-white rounded-sm text-gray-800 font-sans font-medium border border-gray-300 outline-none px-3 shadow-sm w-full h-10 p-2' />
                        {errors.confirmPassword && <div className="font-normal text-sm pt-1 font-sans text-red-600">
                            {errors.confirmPassword.message}
                        </div>}
                    </div>

                    <div className=' pr-5 pl-5 pt-5 mb-7'>
                        <div className='pb-2 w-full'>
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className='rounded-md shadow-sm border-1 w-full h-10 text-white bg-gray-800 font-medium hover:cursor-pointer transition-transform transform hover:scale-[1.02] hover:bg-gray-900 disabled:bg-gray-900'>Create Account</button>

                            {errors.signupForm && <div className="font-normal text-sm pt-1 font-sans text-red-600 text-center">
                                {errors.signupForm.message}
                            </div>}
                        </div>

                        <div className='flex pt-4'>
                            <button className='w-1/2 h-10 flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-[1.02] rounded-md shadow-sm border-1 border-gray-300 mr-2'><img src="https://registry.npmmirror.com/@lobehub/icons-static-png/1.56.0/files/dark/google-color.png" alt="Not Available" className='w-5 h-5' /><span className='pl-2 font-sans font-medium text-gray-800 text-md'>Google</span></button>

                            <button className='w-1/2 h-10 flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-[1.02] rounded-md shadow-sm border-1 border-gray-300 ml-1'><img src="https://www.svgrepo.com/show/503173/apple-logo.svg" alt="Not Available" className='w-5 h-5' /><span className='pl-2 font-sans font-medium text-gray-800 text-md'>Apple</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup