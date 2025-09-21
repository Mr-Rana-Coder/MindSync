import DashboardLineChart from "../LineChart/DashboardLineChart"

const MoodTimeline = (props) => {
    return (
        <div className='w-262 h-135 rounded-xl bg-white ml-10'>
            <div className='flex justify-between items-center pt-6 mx-8'>
                <p className='font-sans font-medium text-xl text-gray-800'>Mood Timeline</p>
                <div className='flex items-center'>
                    <p className='pr-3'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4f4f4f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-line-icon lucide-chart-line"><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="m19 9-5 5-4-4-3 3" /></svg></p>
                </div>
            </div>

            <div className='w-247 h-105 bg-gray- ml-7 mt-6 rounded-xl flex items-center justify-center'>
                <DashboardLineChart lineChartPassedData = {props.data.moodLine} activeTab = {props.activeTab} />
            </div>
        </div>
    )
}

export default MoodTimeline