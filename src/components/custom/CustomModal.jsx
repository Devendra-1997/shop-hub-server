/* eslint-disable react/prop-types */
export const CustomModal = ({ title, onHide, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto transition-opacity duration-300 ease-in-out opacity-100">
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300 ease-in-out"
        onClick={onHide}
      />

      {/* Modal container */}
      <div className="relative w-full max-w-2xl px-8 py-10 mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl transform transition-all duration-300 ease-in-out">
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 px-1">
            {title}
          </h3>
          <button
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition-all"
            onClick={onHide}
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
};
