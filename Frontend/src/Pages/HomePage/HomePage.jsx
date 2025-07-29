
import { useState } from "react";
import HomePageFooter from '../../Components/Footer/HomePageFooter';
import HomePageHeader from "../../Components/Header/HomePageHeader";


const HomePage = () => {
    const [activeTab, setActiveTab] = useState("weekly");
    return (
        <div>
            {/* Main Home Page */}
            <div className='bg-gray-100 w-full h-130 flex justify-center items-center'>
                <div className='pr-30'>
                    <h1 className="text-5xl font-medium text-gray-900 font-sans">
                        Track Your Mind,<br /><p className='text-gray-700'>Transform Your Life</p>
                    </h1>
                    <p className='w-[550px] h-20 text-xl pt-4 font-sans font-normal text-gray-600'> MindSync helps you understand your emotions, track your mood patterns, and build better mental health habits through intuitive journaling and insights.</p>
                    <div className="flex gap-4 pt-15">
                        <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-md font-medium hover:bg-gray-800 transition hover:cursor-pointer transform hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>
                            Start Journaling
                        </button>
                        <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition hover:cursor-pointer transform hover:scale-105">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="3 4 16 16"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            Watch Demo
                        </button>
                    </div>
                </div>
                <div className='pl-30'>
                    <div className="w-[500px] h-[350px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                        Calming Dashboard Preview
                    </div>
                </div>
            </div>
            <div>
                <div className='w-full text-center pt-25'>
                    <p className='font-semibold font-sans text-black text-3xl '>Why Choose MindSync?</p>
                    <p className='font-medium font-sans text-xl text-gray-600 pt-4'>Discover the benefits of consistent modd tracking and emotional <br />awareness </p>
                </div>
                <div id='outerdiv' className='pt-20 pb-25 flex justify-center'>
                    <div className='w-1/3 text-center'>
                        <div className='rounded-full bg-gray-200 w-12 h-12 flex items-center justify-center mx-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#374151" stroke="#4B5563" className='' stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                        </div>
                        <div className=''>
                            <p className='font-semibold font-sans text-black pt-5 text-xl'>Emotional Awareness
                            </p>
                            <p className='font-medium font-sans text-gray-600'>
                                Understand your emotional patterns and <br /> triggers through detailed mood tracking <br />and journaling.
                            </p>
                        </div>
                    </div>
                    <div className='w-1/3 text-center'>
                        <div className='rounded-full bg-gray-200 w-12 h-12 flex items-center justify-center mx-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#374151" stroke="#4B5563" className='' stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                        </div>
                        <div className=''>
                            <p className='font-semibold font-sans text-black pt-5 text-xl'>Visual Insights
                            </p>
                            <p className='font-medium font-sans text-gray-600'>
                                See your mood trends with beautiful charts <br /> and analytics that help you identify <br /> patterns.
                            </p>
                        </div>
                    </div>
                    <div className='w-1/3 text-center'>
                        <div className='rounded-full bg-gray-200 w-12 h-12 flex items-center justify-center mx-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#374151" stroke="#4B5563" className='' stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                        </div>
                        <div className=''>
                            <p className='font-semibold font-sans text-black pt-5 text-xl'>Personal Growth
                            </p>
                            <p className='font-medium font-sans text-gray-600'>
                                Build better habbits and improve your mental <br /> wellbeing with personalized <br /> recommedations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Your Mood dashboard */}
            <div className='bg-gray-100 w-full h-180'>
                <div className='text-center pb-10'>
                    <p className='font-semibold font-sans text-black text-3xl pt-10'>Your Mood Dashboard</p>
                    <p className='font-sans font-medium text-xl text-gray-600 pt-3'>Get instant insights into your emotional wellbeing</p>
                </div>
                <div id='outer Dashboard' className='p-6 bg-white w-4/5 mx-auto rounded-xl h-120'>
                    <div className='flex justify-between'>
                        <p className='font-medium text-gray-800 text-xl font-sans'>Mood Analytics</p>
                        <div className="inline-flex bg-gray-100 rounded-md p-1">
                            <button
                                onClick={() => setActiveTab("weekly")}
                                className={`px-4 py-1 font-medium rounded-md transition hover:cursor-pointer ${activeTab === "weekly"
                                    ? "bg-white text-gray-800 shadow-sm"
                                    : "text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                Weekly
                            </button>
                            <button
                                onClick={() => setActiveTab("monthly")}
                                className={`px-4 py-1 font-medium rounded-md transition hover:cursor-pointer ${activeTab === "monthly"
                                    ? "bg-white text-gray-800 shadow-sm"
                                    : "text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                Monthly
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between pt-5'>
                        <div className='bg-gray-50 w-1/2 p-3 mr-3 rounded-xl h-90'>
                            <p className='p-3 font-medium font-sans text-black'>Mood Distribution</p>
                            <div className='bg-gray-200 w-150 h-67 rounded-xl m-3'>

                            </div>
                        </div>
                        <div className='bg-gray-50 w-1/2 p-2 ml-3 rounded-xl h-90'>
                            <p className='p-3 font-medium font-sans text-black'>Mood Timeline</p>
                            <div className='bg-gray-200 w-150 h-67 rounded-xl m-3'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage