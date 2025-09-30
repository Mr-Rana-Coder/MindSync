import { useState } from "react";

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };


  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-6 ">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-3 py-1.5 flex items-center rounded-md border text-sm font-medium ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "flex items-center gap-2 border shadow-sm border-gray-500 text-gray-700 px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition hover:cursor-pointer transform hover:scale-105"
        }`}
      >
        ← Previous
      </button>

      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium ${
              currentPage === page
                ? "bg-gray-200 text-gray-900 hover:cursor-pointer"
                : "bg-white text-gray-700 hover:bg-gray-50 hover:cursor-pointer"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-1.5 flex items-center rounded-md border text-sm font-medium hover:cursor-pointer ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "flex items-center gap-2 border shadow-md border-gray-500 text-gray-700 px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition hover:cursor-pointer transform hover:scale-105"
        }`}
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
