import GaugeChart from "../StressGaugeChart/GaugeChart";

const StressMeter = () => {
    return (
        <div>
            <div className='w-130 h-120 rounded-xl bg-white ml-10'>
                <div className='flex justify-between pt-6 mx-5'>
                    <p className='font-sans font-medium text-xl text-gray-800'>Stress Meter</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4f4f4f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge-icon lucide-gauge"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg></p>

                </div>
                <div className="flex justify-center items-center pt-20">
                    <GaugeChart />
                </div>
            </div>
        </div>
    )
}

export default StressMeter;