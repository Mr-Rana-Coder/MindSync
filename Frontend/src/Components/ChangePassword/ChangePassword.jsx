import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../Api/baseApi";

const ChangePassword = ({ setShowPasswordModal,setSuccessMessage }) => {

    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "onChange"
    })

    const currentPassword = watch("oldPassword");
    const newPassword = watch("newPassword");
    const confirmPassword = watch("confirmPassword")

    useEffect(() => {
        if (errorMessage) {
            setErrorMessage("")
        }
    }, [currentPassword, newPassword, confirmPassword]);

    const handleConfirm = async (data) => {
        try {
            if (data.newPassword === data.confirmPassword) {
                const response = await api.patch("/users/update-password", data, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                if (response.status === 200) {
                    console.log(response);
                    setShowPasswordModal(false);
                    setSuccessMessage("Password Changed Successfully")
                } else {
                    setShowPasswordModal(response.message || "Something went wrong")
                }
            }
        } catch (error) {
            setErrorMessage(error.response.data.message)
        }
    }
    return (
        (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                <div className="relative bg-gray-100 rounded-xl shadow-lg p-6 w-110 z-10">
                    <h2 className="text-xl font-sans font-medium text-gray-800 mb-4 text-center">
                        Change Your Password
                    </h2>

                    <form onSubmit={handleSubmit(handleConfirm)}>
                        <div className='pt-1 mx-4'>
                            <p className='pb-2 font-medium'>Current Password</p>
                            <input {...register("oldPassword", { required: { value: true, message: "The field is required" }, minLength: { value: 8, message: "The minimum length is 8." }, maxLength: { value: 24, message: "The maximum length is 24" } })} className=' w-full h-10 bg-white rounded-sm text-gray-800 font-sans font-medium border border-gray-300 outline-none px-3 shadow-sm' />
                            {errors.oldPassword && <div className="font-normal text-sm pt-1 font-sans text-red-600">
                                {errors.oldPassword.message}
                            </div>}
                        </div>

                        <div className='pt-5 mx-4'>
                            <p className='pb-2 font-medium'>New Password</p>
                            <input {...register("newPassword", { required: { value: true, message: "The field is required" }, minLength: { value: 8, message: "The minimum length is 8." }, maxLength: { value: 24, message: "The maximum length is 24" } })} className=' w-full h-10 bg-white rounded-sm text-gray-800 font-sans font-medium border border-gray-300 outline-none px-3 shadow-sm' />
                            {errors.newPassword && <div className="font-normal text-sm pt-1 font-sans text-red-600">
                                {errors.newPassword.message}
                            </div>}
                        </div>

                        <div className='pt-5 mx-4'>
                            <p className='pb-2 font-medium'>Confirm Password</p>
                            <input {...register("confirmPassword", { required: { value: true, message: "The field is required" }, minLength: { value: 8, message: "The minimum length is 8." }, maxLength: { value: 24, message: "The maximum length is 24" }, validate: (value) => (value === newPassword || "Password must be same") })} className=' w-full h-10 bg-white rounded-sm text-gray-800 font-sans font-medium border border-gray-300 outline-none px-3 shadow-sm' />
                            {errors.confirmPassword && <div className="font-normal text-sm pt-1 font-sans text-red-600">
                                {errors.confirmPassword.message}
                            </div>}
                        </div>


                        <div className="flex justify-center gap-6 mt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-9 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 hover:cursor-pointer transition-transform transform hover:scale-[1.02] font-sans font-medium"
                            >
                                Change
                            </button>
                            <button
                                onClick={() => (setShowPasswordModal(false))}
                                className="px-9 py-2 bg-gray-300 rounded-md hover:bg-gray-400 hover:cursor-pointer transition-transform transform hover:scale-[1.02] font-sans font-medium text-gray-800"
                            >
                                Cancel
                            </button>
                        </div>
                        {errorMessage && <div className="font-medium text-center text-sm pt-4 font-sans text-red-600">
                            {errorMessage}
                        </div>}
                    </form>
                </div>
            </div>
        )
    )
}

export default ChangePassword