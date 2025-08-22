import HomePageLineChart from "../../Components/LineChart/HomePageLineChart"

const AboutPage = () => {
    return (
        <div>
            <div className='bg-gray-100 w-full h-80 flex flex-col justify-center items-center text-center'>
                <p className='font-sans text-gray-800 text-5xl font-medium'>About <span className='text-gray-600'>MindSync</span></p>
                <p className='pt-5 font-sans text-gray-500 text-xl font-medium'>Discover how MindSync transforms your mental wellness journey through <br /> intelligent insights and personalized support. </p>
            </div>
            <div className="bg-white w-full h-150">
                <div className="w-full flex flex-col items-center pt-12">
                    <p className="text-4xl text-gray-800 font-medium font-sans pb-5 ">Why MindSync Was Built</p>
                    <hr className="w-25 h-1.5 bg-gray-800 rounded-xl" />
                </div>

                <div className="flex justify-between pt-2">
                    <div id='left' className="w-1/2 pt-12 pl-7">
                        <p className="font-medium font-sans text-gray-800 text-3xl pl-12 pt-14">The Problem We Solve</p>
                        <div className="flex items-center pl-12 pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                            <p className="pl-2 font-medium font-sans text-gray-800 text-lg">Mental health struggles are often invisible and go unaddressed</p>
                        </div>
                        <div className="flex items-center pl-12 pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>
                            <p className="pl-2 font-medium font-sans text-gray-800 text-lg">Traditional therapy has long waiting times and high costs</p>
                        </div>
                        <div className="flex items-center pl-12 pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-lock-icon lucide-user-lock"><circle cx="10" cy="7" r="4" /><path d="M10.3 15H7a4 4 0 0 0-4 4v2" /><path d="M15 15.5V14a2 2 0 0 1 4 0v1.5" /><rect width="8" height="5" x="13" y="16" rx=".899" /></svg>
                            <p className="pl-2 font-medium font-sans text-gray-800 text-lg">Many people lack access to personalized mental support</p>
                        </div>
                    </div>

                    <div id='right' className="w-1/2 h-80 bg-gray-100 ml-17 mr-20 mt-15 rounded-xl">
                        <div className="bg-white h-4/5 rounded-xl m-8 flex items-center justify-center">
                            {/* <p className="text-white font-medium font-sans text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                
                            </p> */}
                            <HomePageLineChart/>
                        </div>
                    </div>
                </div>


            </div>

            <div className="w-full h-110 bg-gray-100">
                <div className="w-full flex flex-col items-center pt-12">
                    <p className="text-4xl text-gray-800 font-medium font-sans pb-5 ">How MindSync Works</p>
                    <hr className="w-25 h-1.5 bg-gray-800 rounded-xl" />
                </div>

                <div className="flex justify-between items-center w-full pt-10">
                    <div className="w-100 h-50 bg-white ml-20 rounded-xl  border-gray-200 border-1 shadow-lg">
                        <div className="flex justify-center items-center pt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-icon lucide-brain"><path d="M12 18V5" /><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" /><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" /><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" /><path d="M18 18a4 4 0 0 0 2-7.464" /><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" /><path d="M6 18a4 4 0 0 1-2-7.464" /><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" /></svg>
                        </div>
                        <p className="font-sans font-bold text-xl text-gray-800 text-center pt-2">AI-Powered Analysis</p>
                        <p className="font-sans font-medium text-lg text-gray-800 pt-2 text-center">Advanced algorithms analyze your mood <br />patterns and emotional data</p>
                    </div>
                    <div className="w-100 h-50 bg-white rounded-xl  border-gray-200 border-1 shadow-lg">
                        <div className="flex justify-center items-center pt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-line-icon lucide-chart-line"><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                        </div>
                        <p className="font-sans font-bold text-xl text-gray-800 text-center pt-2">Personalized Insights</p>
                        <p className="font-sans font-medium text-lg text-gray-800 pt-2 text-center">Receive tailored recommendations based <br />on your unique mental health profile</p>
                    </div>
                    <div className="w-100 h-50 bg-white mr-20 rounded-xl  border-gray-200 border-1 shadow-lg">
                        <div className="flex justify-center items-center pt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>
                        </div>
                        <p className="font-sans font-bold text-xl text-gray-800 text-center pt-2">Continuous Support</p>
                        <p className="font-sans font-medium text-lg text-gray-800 pt-2 text-center">24/7 access to mental health resources and<br />copying strategies</p>
                    </div>
                </div>

            </div>

            <div className="w-full h-110 bg-white">
                <div className="w-full flex flex-col items-center pt-12">
                    <p className="text-4xl text-gray-800 font-medium font-sans pb-5 ">Who MindSync Is For</p>
                    <hr className="w-25 h-1.5 bg-gray-800 rounded-xl" />
                </div>

                <div className="flex justify-between items-center w-full pt-10">
                    <div className="w-100 h-50 bg-white ml-20 rounded-xl border-gray-200 border-1 shadow-lg">
                        <div className="flex justify-center items-center pt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <p className="font-sans font-bold text-xl text-gray-800 text-center pt-2">Young Professionals</p>
                        <p className="font-sans font-medium text-lg text-gray-800 pt-2 text-center">Managing work stress and maintainig <br />work-life-balance</p>
                    </div>
                    <div className="w-100 h-50 bg-white rounded-xl  border-gray-200 border-1 shadow-lg">
                        <div className="flex justify-center items-center pt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <p className="font-sans font-bold text-xl text-gray-800 text-center pt-2">Students</p>
                        <p className="font-sans font-medium text-lg text-gray-800 pt-2 text-center">Dealing with academic pressure and <br />on anxiety</p>
                    </div>
                    <div className="w-100 h-50 bg-white mr-20 rounded-xl  border-gray-200 border-1 shadow-lg">
                        <div className="flex justify-center items-center pt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <p className="font-sans font-bold text-xl text-gray-800 text-center pt-2">Anyone Seeking Support</p>
                        <p className="font-sans font-medium text-lg text-gray-800 pt-2 text-center">Individual looking to improve their mental<br />wellness</p>
                    </div>
                </div>

            </div>

            <div className="w-full h-120 bg-gray-100">
                <div className="w-full flex flex-col items-center pt-12">
                    <p className="text-4xl text-gray-800 font-medium font-sans pb-5 ">Technology & Privacy</p>
                    <hr className="w-25 h-1.5 bg-gray-800 rounded-xl" />
                </div>

                <div className="flex justify-center">
                    <div className="w-1/2 p-12 ml-20">
                        <p className="font-sans font-medium text-3xl text-gray-800">Advanced Technology</p>
                        <div className="pt-4">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot-icon lucide-bot"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
                                <p className="font-sans font-bold text-lg text-gray-800 pl-2">Machine Learning</p>
                            </div>
                            <p className="font-sans font-medium text-sm text-gray-700 pl-8">Natural language processing for mood analysis</p>
                        </div>
                        <div className="pt-4">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
                                <p className="font-sans font-bold text-lg text-gray-800 pl-2">Cloud Infrastructure</p>
                            </div>
                            <p className="font-sans font-medium text-sm text-gray-700 pl-8">Scalable and reliable service delivery</p>
                        </div>
                        <div className="pt-4">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop-icon lucide-laptop"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" /><path d="M20.054 15.987H3.946" /></svg>
                                <p className="font-sans font-bold text-lg text-gray-800 pl-2">Cross-Platform</p>
                            </div>
                            <p className="font-sans font-medium text-sm text-gray-700 pl-8">Available on Windows, IOS and Bing</p>
                        </div>
                    </div>
                    <div className="w-1/2 p-12 pl-5">
                        <p className="font-sans font-medium text-3xl text-gray-800">Privacy First</p>
                        <div className="pt-4">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
                                <p className="font-sans font-bold text-lg text-gray-800 pl-2">End-to-End Encryption</p>
                            </div>
                            <p className="font-sans font-medium text-sm text-gray-700 pl-8">Your data is encrypted and secure</p>
                        </div>
                        <div className="pt-4">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu-icon lucide-cpu"><path d="M12 20v2" /><path d="M12 2v2" /><path d="M17 20v2" /><path d="M17 2v2" /><path d="M2 12h2" /><path d="M2 17h2" /><path d="M2 7h2" /><path d="M20 12h2" /><path d="M20 17h2" /><path d="M20 7h2" /><path d="M7 20v2" /><path d="M7 2v2" /><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="8" y="8" width="8" height="8" rx="1" /></svg>
                                <p className="font-sans font-bold text-lg text-gray-800 pl-2">Anonymous Processing</p>
                            </div>
                            <p className="font-sans font-medium text-sm text-gray-700 pl-8">Personal data is anonymized for anlysis</p>
                        </div>
                        <div className="pt-4">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                                <p className="font-sans font-bold text-lg text-gray-800 pl-2">Personal Guide</p>
                            </div>
                            <p className="font-sans font-medium text-sm text-gray-700 pl-8">One to One Interactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage