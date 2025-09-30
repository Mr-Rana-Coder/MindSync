import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { api } from "../../Api/baseApi";
import { useState } from "react";
import ChangePassword from "../../Components/ChangePassword/ChangePassword";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Store/authSlice";

const SettingPage = () => {
    const [formData, setFormData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, dirtyFields, isSubmitting },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            about: "",
        },
        mode: "onSubmit",
    });
    useEffect(() => {
        const fetchUser = async () => {
            try {
                reset({
                    firstName: user?.firstName || "",
                    lastName: user?.lastName || "",
                    email: user?.email || "",
                    about: user?.about || "",
                });
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchUser();
    }, [reset, user]);

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const onSubmit = async (data) => {
        if (Object.keys(dirtyFields).length === 0) {
            alert("Please modify at least one field to save changes.");
            return;
        }
        setFormData(data);
        setShowModal(true);
    }

    const onChangePassword = () => {
        setShowPasswordModal(true);
    }

    const handleConfirm = async () => {
        try {
            const response = await api.patch("/users/update-account-details", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 201) {
                console.log("PATCH response:", response);
                setSuccessMessage("Changes Saved Successfully!");
                dispatch(setUser({ data: { user: response.data.data.user } }));
                setShowModal(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='w-280 h-130 border-2 border-gray-300 mt-5 shadow-md rounded-md'>
                <p className='pt-5 font-medium font-sans text-gray-800 text-3xl text-center'>Profile Information</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-center items-center'>
                        <div className=' pt-4 mr-15'>
                            <p className='font-sans font-medium text-xl text-gray-600 pb-2'>First Name</p>
                            <input
                                type="text"
                                {...register("firstName", {
                                    required: "First Name is required",
                                    minLength: { value: 3, message: "Minimum length is 3" },
                                    maxLength: { value: 16, message: "Maximum length is 16" },
                                })}
                                className="border-1 border-gray-300 shadow-sm rounded-sm w-100 h-10 outline-none pl-3 font-sans font-medium text-gray-800"
                            />
                            {errors.firstName && <div className="font-normal text-sm pt-1 font-sans text-red-600">
                                {errors.firstName.message}
                            </div>}
                        </div>
                        <div className='pt-4 ml-15'>
                            <p className='font-sans font-medium text-xl text-gray-600 pb-2'>Last Name</p>
                            <input
                                type="text"
                                {...register("lastName", {
                                    required: "Last Name is required",
                                    minLength: { value: 3, message: "Minimum length is 3" },
                                    maxLength: { value: 16, message: "Maximum length is 16" },
                                })}
                                className="border-1 border-gray-300 shadow-sm rounded-sm w-100 h-10 outline-none pl-3 font-sans font-medium text-gray-800"
                            />
                            {errors.lastName && <div className="font-normal text-sm pt-1 font-sans text-red-600">
                                {errors.lastName.message}
                            </div>}
                        </div>
                    </div>

                    <div className='pt-6 ml-25'>
                        <p className='font-sans font-medium text-gray-600 text-xl pb-2'>Email Address</p>
                        <input type="text" placeholder={user?.email || ""} disabled className='border-1 border-gray-300 shadow-sm rounded-sm w-230 h-10 outline-none pl-3 font-sans font-medium text-black' />
                    </div>

                    <div className='pt-6 ml-25'>
                        <p className='font-sans font-medium text-gray-600 text-xl pb-2'>About</p>
                        <textarea
                            {...register("about", {
                                required: "About is required",
                                minLength: { value: 3, message: "Minimum length is 3" },
                                maxLength: { value: 100, message: "Maximum length is 100" },
                            })}
                            placeholder="Write about yourself..."
                            className="border-1 border-gray-300 shadow-sm rounded-sm w-230 h-30 outline-none pl-3 pt-2 font-sans font-medium text-gray-800"
                        />
                        {errors.about && (
                            <div className="font-normal text-sm pt-1 font-sans text-red-600">
                                {errors.about.message}
                            </div>
                        )}
                    </div>

                    <div className='pl-25 pt-2'>
                        <button type="submit" disabled={isSubmitting} className='w-70 h-12 flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-[1.02] rounded-md shadow-sm border-1 bg-gray-800 mr-7 mt-1'><span className='pl-2 font-sans font-medium text-white text-md'>Save Changes</span></button>
                    </div>
                </form>

                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                        <div className="relative bg-gray-100 rounded-xl shadow-lg p-6 w-110 z-10">
                            <h2 className="text-xl font-sans font-medium text-gray-800 mb-4 text-center">
                                Do you want to confirm the changes?
                            </h2>
                            <div className="flex justify-center gap-4">
                                <button
                                    type="button"
                                    onClick={handleConfirm}
                                    className="px-9 py-2 bg-green-600 text-white rounded-md hover:bg-green-800 hover:cursor-pointer transition-transform transform hover:scale-[1.02] font-sans font-medium"
                                >
                                    OK
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-6 py-2 bg-gray-300 rounded-md hover:bg-gray-500 hover:cursor-pointer transition-transform transform hover:scale-[1.02] font-sans font-medium text-gray-800"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <div className='w-280 h-113 border-2 border-gray-300 mt-8 mb-8 shadow-md rounded-md'>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
                                    <span className='pl-2 font-sans font-medium text-white text-md'>Export PDF</span></div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Change Password */}
                <div className='w-260 h-25 border-2 mx-10 mt-4 rounded-xl border-gray-200'>
                    <div className='flex justify-between items-center mt-1'>
                        <div className='flex items-center mt-3'>
                            <p className="mx-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-paste-icon lucide-clipboard-paste"><path d="M11 14h10"/><path d="M16 4h2a2 2 0 0 1 2 2v1.344"/><path d="m17 18 4-4-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>
                            </p>
                            <div>
                                <p className='font-sans font-medium text-gray-800 text-xl'>Change Password</p>
                                <p className='font-sans font-medium text-gray-600 text-lg'>Change your Current password</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={onChangePassword} className='w-50 h-12 flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-[1.02] rounded-md shadow-sm border-1 bg-gray-800 mr-5 mt-5'>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-whole-word-icon lucide-whole-word"><circle cx="7" cy="12" r="3" /><path d="M10 9v6" /><circle cx="17" cy="12" r="3" /><path d="M14 7v8" /><path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" /></svg>
                                    <span className='pl-2 font-sans font-medium text-white text-md'>Change Password</span></div>
                            </button>
                        </div>
                    </div>
                </div>

                {
                    showPasswordModal && (
                        <ChangePassword setShowPasswordModal={setShowPasswordModal} setSuccessMessage = {setSuccessMessage}/>
                    )
                }

                <div className='w-260 h-25 border-2 mx-10 mt-4 rounded-xl border-gray-200'>
                    <div className='flex justify-between items-center mt-1'>
                        <div className='flex items-center mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash" className='mr-3 ml-3'><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                            <div>
                                <p className='font-sans font-medium text-gray-800 text-xl'>Delete Account</p>
                                <p className='font-sans font-medium text-gray-600 text-lg'>Permanently delete your account and all data</p>
                            </div>
                        </div>
                        <div>
                            <button className='w-50 h-12 flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-[1.02] rounded-md shadow-sm border-1 bg-gray-800 mr-5 mt-5'>
                                <div className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    <span className='pl-2 font-sans font-medium text-white text-md'>Delete Account</span></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {successMessage && (
                <div className="fixed bottom-5 right-5 bg-green-500 font-sans font-medium text-white px-4 py-2 rounded shadow-lg z-50 transition-transform transform duration-300 ease-out">
                    {successMessage}
                </div>
            )}

        </div >
    )
}

export default SettingPage