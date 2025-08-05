import React from 'react'

const JournalPage = () => {
  return (
    <div>
      <div className='pl-10'>
        <p className='font-medium font-sans text-3xl text-gray-800 pb-2'>Journal Entry</p>
        <p className='font-medium font-sans text-xl text-gray-600'>Capture Your Thoughts and Emotions</p>
      </div>
      <div className='w-400 h-147 mt-5 mx-9 rounded-xl border-2 border-gray-300'>
        <div className='flex items-center justify-between pt-6 px-8'>
          <div>
            <p className='font-sans font-medium text-2xl text-gray-800'>What's on your mind?</p>
          </div>
          <div className='flex items-center'>
            <p className='font-sans font-medium text-lg text-gray-600 mr-3'>August 13,2025 </p>
            <div className='w-2 h-2 rounded-full bg-gray-600 mr-3'></div>
            <p className='font-sans font-medium text-lg text-gray-600'>12:00 PM</p>
          </div>
        </div>

        <div class="w-385 p-4 border-2 rounded-xl mx-7 mt-6 border-gray-300">

          <textarea
            placeholder="Start writing your thoughts here... You can express anything that comes to mind - feelings, experiences, reflections, or daily observations."
            className="w-385 h-85 resize-none border-none focus:outline-none placeholder:text-gray-500 text-gray-800"
            maxlength="5000"
            oninput="document.getElementById('char-count').innerText = this.value.length"
          ></textarea>

          <div class="flex justify-end items-center mt-2 text-sm text-gray-600">
            <div class="flex items-center pr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic-icon lucide-mic"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></svg>
              <span className='pr-2 font-sans font-medium text-lg pl-1'>Voice Input</span>
            </div>
            <div className='font-sans font-medium text-lg text-gray-500'><span >0</span> / 5000</div>
            
          </div>
        </div>

        <div className='flex justify-end'>
            <button className='w-70 h-12 flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-[1.02] rounded-md shadow-sm border-1 bg-gray-800 mr-7 mt-5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-icon lucide-brain"><path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/></svg><span className='pl-2 font-sans font-medium text-white text-md'>Analyze Emotions</span></button>
        </div>

      </div>

      <div className='w-400 h-137 mt-10 mb-10 mx-9 rounded-xl bg-gray-100 border-1 border-gray-300'>

        <div className='flex pt-7 pl-7 pb-5'>
          <div className='w-9 h-9 rounded-md bg-black flex flex-col justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-icon lucide-brain"><path d="M12 18V5" /><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" /><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" /><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" /><path d="M18 18a4 4 0 0 0 2-7.464" /><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" /><path d="M6 18a4 4 0 0 1-2-7.464" /><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" /></svg>
          </div>
          <p className='pl-3 text-gray-800 font-medium font-sans text-2xl whitespace-nowrap'>AI Emotional Analysis</p>
        </div>

        <div className='flex w-full'>
          <div className='w-1/3 h-40 border-1 rounded-xl border-gray-200 ml-7 mr-7 bg-white'>
            <div className='flex justify-between px-5 pt-5 items-center'>
              <p className='font-sans font-medium text-xl text-gray-600'>Dominant Emotion</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5e5e5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile-icon lucide-smile"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg></p>
            </div>
            <div className='pl-5 pt-3'>
              <p className='font-sans font-medium text-3xl text-gray-800 pb-1'>Optimistic</p>
              <p className='font-sans font-medium text-lg text-gray-600 pl-1'>78% Confidence</p>
            </div>
          </div>
          <div className='w-1/3 h-40 border-1 rounded-xl border-gray-200 mr-7 bg-white'>

            <div className='flex justify-between px-5 pt-5 items-center'>
              <p className='font-sans font-medium text-xl text-gray-600'>Stress Level</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5e5e5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-activity-icon lucide-square-activity"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M17 12h-2l-2 5-2-10-2 5H7" /></svg></p>
            </div>
            <div className='pl-5 pt-3'>
              <p className='font-sans font-medium text-3xl text-gray-800 pb-1'>Low</p>
              <p className='font-sans font-medium text-lg text-gray-600 pl-1'>2/10</p>
            </div>

          </div>
          <div className='w-1/3 h-40 border-1 rounded-xl border-gray-200 mr-7 bg-white'>

            <div className='flex justify-between px-5 pt-5 items-center'>
              <p className='font-sans font-medium text-xl text-gray-600'>Energy Level</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5e5e5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg></p>
            </div>
            <div className='pl-5 pt-3'>
              <p className='font-sans font-medium text-3xl text-gray-800 pb-1'>High</p>
              <p className='font-sans font-medium text-lg text-gray-600 pl-1'>8/10</p>
            </div>

          </div>
        </div>

        <div className='w-385 h-58 bg-white ml-7 border-gray-200 rounded-xl mt-7'>
          <h1 className='font-sans font-medium text-3xl pt-5 pl-8 text-gray-800'>Key Insights</h1>
          <ul className='pt-6 pl-15 list-disc'>
            <li className='font-sans font-medium text-xl text-gray-600 pb-4'>Your writing shows a positive outlook and forward-thinking mindset.</li>
            <li className='font-sans font-medium text-xl text-gray-600 pb-4'>Mention of goals and achievements indicate motivation</li>
            <li className='font-sans font-medium text-xl text-gray-600'>Social connection appear to be a source of joy.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default JournalPage