import React from "react";

const JournalEntry = React.memo(({
    entry,
    index,
    expandedIndex,
    setExpandedIndex,
    countWords,
    dateFormat,
    getMoodCategory,
    truncateWords,
    isLast
}) => {
    const displayText = expandedIndex === index ? entry.journalEntry : truncateWords(entry.journalEntry, 25);

    return (
        <div className={`w-full ${isLast ? 'pb-6' : ''}`}>
            <div className='w-full'>
                <div className='flex mt-5 ml-5 items-center'>
                    <p className='font-sans font-medium text-md text-gray-800 pr-3'>{dateFormat(entry.date)}</p>
                    <div className='w-17 h-5 font-sans font-medium text-sm text-gray-800 bg-gray-200 rounded-xl flex items-center justify-center'>{getMoodCategory(entry.moodLevel)}</div>
                </div>

                <div className='font-sans font-medium text-gray-700 text-lg pt-3 pl-5'>
                    {displayText}
                </div>

                {expandedIndex === index && entry.keyInsights && (
                    <div className="bg-gray-50 mt-5 mb-2 pb-5 rounded-xl w-385 ml-5 shadow-xs" >
                        <p className="pt-3 text-gray-700 font-medium font-sans text-xl pl-5">Key Insights</p>
                        <ul className="list-disc pl-12 mt-2 font-medium text-lg text-gray-700">
                            {entry.keyInsights.map((insight, i) => (
                                <li key={i}>{insight}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className='flex justify-between pt-4 pl-5 mb-5 items-center'>
                    <p className='font-sans font-medium text-gray-500 text-md'> Word Count: {countWords(entry.journalEntry)}</p>
                    <div
                        className="font-sans font-medium text-gray-500 text-md pr-5 cursor-pointer hover:text-gray-900 hover:underline"
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                        {expandedIndex === index ? "Collapse" : "Expand"}
                    </div>
                </div>
            </div>
            {!isLast && <hr className="w-full border-t-2 border-gray-200 my-6" />}
        </div>
    );
});

export default JournalEntry;
