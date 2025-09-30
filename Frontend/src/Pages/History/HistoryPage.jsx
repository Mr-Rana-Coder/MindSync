import { useEffect, useMemo, useState } from "react";
import { api } from "../../Api/baseApi";
import Pagination from "../../Components/PaginationComponent/Pagination";
import JournalEntry from "../../Components/JournalEntry/JournalEntry";

const HistoryPage = () => {
    const [entries, setEntries] = useState({ journal: [], totalEntries: 0 });
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [selectedMood, setSelectedMood] = useState("All Moods");
    const [totalPages, setTotalPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const countWords = (text) => text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    const dateFormat = (isoDate) => new Date(isoDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    const getMoodCategory = (mood) => {
        if (mood <= 2) return "Sad";
        if (mood <= 4) return "Stressed";
        if (mood <= 6) return "Neutral";
        if (mood <= 8) return "Excited";
        return "Happy";
    }

    const truncateWords = (text, limit) => {
        const words = text.split(/\s+/);
        if (words.length <= limit) return text;
        return words.slice(0, limit).join(" ") + "...";
    };

    const filteredEntries = useMemo(() => {
        return selectedMood === "All Moods"
            ? [...entries.journal].sort((a, b) => new Date(b.date) - new Date(a.date))
            : entries.journal.filter(e => getMoodCategory(e.moodLevel) === selectedMood)
                .sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [entries, selectedMood]);

    const searchedEntries = useMemo(() => {
        return filteredEntries.filter(e => e.journalEntry.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [filteredEntries, searchQuery]);

    const page = pageNumber;
    const limit = 5;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/journal/journal-history/${page}/${limit}`);
                if (response.status === 200) {
                    setEntries(response.data.data);
                    setTotalPages(Math.ceil(response.data.data.totalEntries / limit));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [page]);

    const renderedEntries = useMemo(() => {
        return searchedEntries.map((entry, index) => (
            <JournalEntry
                key={entry.id || index}
                entry={entry}
                index={index}
                expandedIndex={expandedIndex}
                setExpandedIndex={setExpandedIndex}
                countWords={countWords}
                dateFormat={dateFormat}
                getMoodCategory={getMoodCategory}
                truncateWords={truncateWords}
                isLast={index === searchedEntries.length - 1}
            />
        ));
    }, [searchedEntries, expandedIndex]);

    return (
        <div>
            <div className='pl-10'>
                <p className='font-medium font-sans text-3xl text-gray-800 pb-2'>Journal History</p>
                <p className='font-medium font-sans text-xl text-gray-600'>Review your past jounral entries and track your journey</p>
            </div>

            <div className='pl-10 pt-8 flex justify-between items-center'>
                <div className='flex'>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-64 shadow-sm">
                        <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search entries..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}

                            className="outline-none bg-transparent w-full placeholder-gray-400 font-sans font-medium text-gray-800"
                        />
                    </div>

                    <div className='pl-4'>
                        <select
                            value={selectedMood}
                            onChange={(e) => setSelectedMood(e.target.value)}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 font-medium text-gray-700 bg-white hover:cursor-pointer h-12 appearance-auto'>
                            <option value="Happy"> Happy</option>
                            <option value="Neutral"> Neutral</option>
                            <option value="Sad">Sad</option>
                            <option value="Stressed">Stressed</option>
                            <option value="Excited">Excited</option>
                            <option value="All Moods">All Moods</option>
                        </select>
                    </div>
                </div>

                <div className='pr-10'>
                    <p className='font-medium font-sans text-lg text-gray-500'>Total Entries: {entries.totalEntries}</p>
                </div>
            </div>

            <div className='mx-10 w-407 mb-10 min-h-[100px] border-1 rounded-xl border-gray-300 mt-8 shadow-sm'>
                {renderedEntries}
            </div>
            
            {/* Pagination Component */}
            <div className="mb-10">
                <Pagination totalPages={totalPages} onPageChange={(page) => (setPageNumber(page))} />
            </div>
        </div>

    )
}

export default HistoryPage;
