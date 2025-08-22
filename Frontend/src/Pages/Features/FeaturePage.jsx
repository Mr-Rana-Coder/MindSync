import HomePagePieChart from "../../Components/PieChart/HomePagePieChart"

const FeaturePage = () => {
    return (
        <div>
            <div className='bg-gray-100 w-full h-80 flex flex-col justify-center items-center text-center'>
                <p className='font-sans text-gray-800 text-5xl font-medium'>Powerful Features For Your <span className='text-gray-600'>MindSync</span></p>
                <p className='pt-5 font-sans text-gray-500 text-xl font-medium'>Discover what makes MindSync the perfect companion for your daily <br /> reflection and emotional wellness journey. </p>
            </div>

            <div className='bg-white w-full h-130 flex justify-between items-center'>
                <div id="left" className='p-25'>
                    <div id='Voice Journalling Logo' className='flex w-1/2 items-center h-full'>
                        <div className='w-10 h-10 rounded-md bg-black flex flex-col justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic-icon lucide-mic" ><path d="M12 19v3" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><rect x="9" y="2" width="6" height="13" rx="3" /></svg>
                        </div>
                        <p className='pl-3 text-gray-800 font-medium font-sans text-2xl'>Voice Journaling</p>
                    </div>
                    <div id='Voice Journaling Text' className='pt-6 pb-6'>
                        <p className='font-sans font-medium text-xl text-gray-800'>Talk instead of typing</p>
                        <p className='font-sans font-medium text-md text-gray-600 pt-4'> Express your thoughts naturally through voice.No more struggling with <br /> blank pages or typing fatigue. Just speak your mind and let your thoughts <br />flow freely.</p>
                    </div>
                    <div id="Bullet Points" className='pt-3 w-135 h-42 rounded-xl bg-gray-50'>
                        <p className='text-gray-800 font-medium text-xl font-sans pl-4'>Key Benfits:</p>
                        <p className='text-gray-800 font-medium text-md font-sans pt-3 pl-5' >✔ Converts speech to text instantly</p>
                        <p className='text-gray-800 font-medium text-md font-sans pt-3 pl-5'>✔ Natural conversation flow</p>
                        <p className='text-gray-800 font-medium text-md font-sans pt-3 pl-5'>✔ Hands-free journaling experience</p>
                    </div>
                </div>

                <div id='right' className='w-1/2 pl-20'>
                    <div className='w-170 h-93 bg-gray-200 rounded-xl flex justify-center items-center'>
                        <img src="https://images.yourstory.com/cs/2/25e9e0e0605211e984534d4121ad4bb6/imag2-1613145956231.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75" className='w-full h-full rounded-xl shadow-md border-2' alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-white w-full h-130 flex justify-between items-center'>
                <div id='left' className='w-1/2 p-25'>
                    <div className='w-170 h-93 bg-gray-200 rounded-xl flex justify-center items-center'>
                        <img className='w-full h-full rounded-xl' src="https://betterflylb.com/wp-content/uploads/2024/10/Emotion-AI-The-Next-Frontier-in-Technology-Digital-Marketing-Agency-Lebanon-1160x700.jpg" alt="" />
                    </div>
                </div>
                <div id="right" className='pr-55'>
                    <div id='Voice Journalling Logo' className='flex items-center h-full'>
                        <div className='w-10 h-10 rounded-md bg-black flex flex-col justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-icon lucide-brain"><path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/></svg>
                        </div>
                        <p className='pl-3 text-gray-800 font-medium font-sans text-2xl whitespace-nowrap'>AI Emotional Feedback</p>
                    </div>
                    <div id='Voice Journaling Text' className='pt-6 pb-6'>
                        <p className='font-sans font-medium text-xl text-gray-800'>Smart insights on your thoughts</p>
                        <p className='font-sans font-medium text-md text-gray-600 pt-4'> Advanced AI analyze your journal entries to provide meaningful insights<br /> about your emotional patterns, helping you understand yourself better.</p>
                    </div>
                    <div id="Bullet Points" className='pt-3 w-135 h-42 rounded-xl bg-gray-50'>
                        <p className='text-gray-800 font-medium text-xl font-sans pl-4'>AI capabilities:</p>
                        <p className='text-gray-800 font-medium text-md font-sans pt-3 pl-5' >✔ Summarizes mood and emotional tone</p>
                        <p className='text-gray-800 font-medium text-md font-sans pt-3 pl-5'>✔ Identifies key themes and patterns</p>
                        <p className='text-gray-800 font-medium text-md font-sans pt-3 pl-5'>✔ Provides personalized suggestions</p>
                    </div>
                </div>
            </div>

            <div className='bg-white w-full h-130 flex justify-between items-center'>
                <div id="left" className='p-25'>
                    <div id='Voice Journalling Logo' className='flex w-1/2 items-center h-full'>
                        <div className='w-10 h-10 rounded-md bg-black flex flex-col justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-pie-icon lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg>
                        </div>
                        <p className='pl-3 text-gray-800 font-medium font-sans text-2xl'>Mood tracking</p>
                    </div>
                    <div id='Voice Journaling Text' className='pt-6 pb-6'>
                        <p className='font-sans font-medium text-xl text-gray-800'>Pie chart and graph of your emotional journey</p>
                        <p className='font-sans font-medium text-md text-gray-600 pt-4'> Visualize your emotinal patterns with beautiful charts and graphs. Track <br />your progress over time and gain insights into your mental wellness  <br />jounrey.</p>
                    </div>
                    <div id="Bullet Points" className='pt-3 w-135 h-42 rounded-xl bg-gray-50'>
                        <p className='text-gray-800 font-medium text-xl font-sans pl-4'>Tracking Features:</p>
                        <p className='text-gray-800 font-medium text-md font-sans pt-3 pl-5' >✔ Helps detect recurring patterns</p>
                        <p className='text-gray-800 font-medium text-md font-sans pt-3 pl-5'>✔ Weekly and monthly summaries</p>
                        <p className='text-gray-800 font-medium text-md font-sans pt-3 pl-5'>✔ Trend analysis and predictions</p>
                    </div>
                </div>

                <div id='right' className='w-1/2 pl-20'>
                    <div className='w-170 h-93 bg-gray-200 rounded-xl flex justify-center items-center'>
                        <HomePagePieChart/>
                    </div>
                </div>
            </div>

            <div className='bg-white w-full h-150 flex justify-between items-center'>
                <div id='left' className='w-1/2 p-25'>
                    <div className='w-170 h-93 bg-white rounded-xl flex justify-center items-center'>
                        <img src="https://static.vecteezy.com/system/resources/previews/024/045/697/non_2x/journal-graphic-clipart-design-free-png.png" className="w-full h-full rounded-xl" alt="" />
                    </div>
                </div>
                <div id="right" className='pr-55'>
                    <div id='Voice Journalling Logo' className='flex w-1/2 items-center h-full'>
                        <div className='w-10 h-10 rounded-md bg-black flex flex-col justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notepad-text-icon lucide-notepad-text"><path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10h6"/><path d="M8 14h8"/><path d="M8 18h5"/></svg>
                        </div>
                        <p className='pl-3 text-gray-800 font-medium font-sans text-2xl'>Journal History</p>
                    </div>
                    <div id='Voice Journaling Text' className='pt-6 pb-6'>
                        <p className='font-sans font-medium text-xl text-gray-800'>View all past entries in one place</p>
                        <p className='font-sans font-medium text-md text-gray-600 pt-4'> Access your complete journaling history with powerful search and filtering <br /> capabilities. Never lose track of your thoughts and personal growth <br />journey.</p>
                    </div>
                    <div id="Bullet Points" className='pt-3 w-135 h-42 rounded-xl bg-gray-50'>
                        <p className='text-gray-800 font-medium text-xl font-sans pl-4'>Optimization Features:</p>
                        <p className='text-gray-800 font-medium text-md font-sans pt-3 pl-5' >✔ Filter by mood or date</p>
                        <p className='text-gray-800 font-medium text-md font-sans pt-3 pl-5'>✔ Search though all entries</p>
                        <p className='text-gray-800 font-medium text-md font-sans pt-3 pl-5'>✔ Export and backup options</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeaturePage