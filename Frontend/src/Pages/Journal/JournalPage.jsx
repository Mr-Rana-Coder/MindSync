import JournalAI from "../../Components/JorunalAI/JournalAI"
import JournalAnalysis from "../../Components/JorunalAnalysis/JournalAnalysis"

const JournalPage = () => {
  return (
    <div>
      <div className='pl-10'>
        <p className='font-medium font-sans text-3xl text-gray-800 pb-2'>Journal Entry</p>
        <p className='font-medium font-sans text-xl text-gray-600'>Capture Your Thoughts and Emotions</p>
      </div>

      {/* Journal AI */}
      <JournalAI />

      {/* Journal Anlysis */}
      <JournalAnalysis />
    </div>
  )
}

export default JournalPage