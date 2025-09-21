import BarChart from "../BarChart/BarChart";

const EnergyLevels = (props) => {
    return (
        <div>
            <div className='w-262 h-120 rounded-xl bg-white ml-10'>
                <div className='flex justify-between items-center pt-6 mx-8'>
                    <p className='font-sans font-medium text-xl text-gray-800'>Energy Levels</p>
                    <div className='flex items-center'>
                        <p className='pr-3'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4f4f4f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-icon lucide-chart-column"><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg></p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-248 h-102 pt-3">
                        <BarChart barChartPassedData = {props.data.energyBar} activeTab = {props.activeTab} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EnergyLevels;