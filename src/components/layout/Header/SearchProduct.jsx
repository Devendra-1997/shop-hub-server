/* eslint-disable react/prop-types */
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SearchProduct = ({
  showSearchInput,
  searchRef,
  searchProducts,
  handleOnInputChange,
  handleClearSearch,
}) => {
  return (
    <>
      {showSearchInput && (
        <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-black bg-opacity-70 z-10 flex justify-center mx-auto">
          <div
            ref={searchRef}
            className={`bg-white w-full md:w-2/3 lg:w-1/3 md:left-1/2 mt-4 md:mt-24 rounded-lg overflow-y-auto shadow-xl transition-all duration-300 ${
              searchProducts?.length > 0 ? "h-[50vh]" : "h-16"
            }`}
          >
            <div className="relative flex items-center">
              <MagnifyingGlassIcon className="w-6 h-6 absolute left-4 text-gray-400" />
              <input
                type="text"
                className="w-full h-12 pl-12 pr-14 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-gray-800 placeholder-gray-500 transition-all duration-200"
                placeholder="Search products..."
                onChange={handleOnInputChange}
              />
              <span
                className="font-bold text-lg absolute right-4 cursor-pointer text-gray-600 hover:text-gray-900 transition-all duration-150"
                onClick={handleClearSearch}
              >
                X
              </span>
            </div>
            {searchProducts?.length > 0 && (
              <div className="max-h-[60vh] overflow-auto">
                {searchProducts?.map((item) => (
                  <div
                    key={item?._id}
                    className="flex items-center gap-4 p-4 border-b last:border-b-0 transition-all duration-200 hover:bg-gray-50"
                  >
                    <Link
                      to={`/product/${item?._id}`}
                      className="flex items-center gap-4 w-full"
                      onClick={handleClearSearch}
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="text-sm text-gray-700">
                        <p className="font-semibold text-lg truncate">
                          {item?.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.sku}</p>
                        <p className="font-medium text-gray-900">
                          ${item.salesPrice || item.price}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchProduct;
