/* eslint-disable react/prop-types */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Pagination = (props) => {
  const {
    productLength,
    currentPage,
    totalPages,
    handlePreviousPage,
    handleNextPage,
    handlePageClick,
    startIndex,
    endIndex,
  } = props;

  return (
    <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 bg-light dark:bg-dark px-4 py-3 sm:px-6">
      <div className="flex flex-1 items-center justify-between">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
          <span className="font-medium">
            {endIndex < productLength ? endIndex : productLength}
          </span>{" "}
          of <span className="font-medium">{productLength}</span> results
        </p>

        <nav
          aria-label="Pagination"
          className="inline-flex -space-x-px rounded-md shadow-sm"
        >
          <button
            onClick={handlePreviousPage}
            className="relative inline-flex items-center justify-center rounded-l-md p-2 text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-2 focus:ring-purple-600 focus:outline-none"
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          {new Array(totalPages).fill(null).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              aria-current={currentPage === index + 1 ? "page" : undefined}
              className={`relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium border rounded-md ${
                currentPage === index + 1
                  ? "bg-purple-600 dark:bg-purple-500 text-white"
                  : "bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              } transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            className="relative inline-flex items-center justify-center rounded-r-md p-2 text-gray-500 dark:text-gray-300 bg-white dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-2 focus:ring-purple-600 focus:outline-none"
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
