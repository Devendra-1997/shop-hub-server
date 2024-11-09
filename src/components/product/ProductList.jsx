/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductList = ({ products }) => {
  const { brands } = useSelector((state) => state.categories);

  if (products?.length === 0) {
    return (
      <div className="text-center mt-20 h-full text-red-500">
        No Products Found
      </div>
    );
  }

  return (
    <div className="bg-light dark:bg-dark py-16">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.map((item) => (
            <div
              key={item?._id}
              className="group relative p-4 pb-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                <img
                  alt={item?.name || "Product"}
                  src={item?.thumbnail}
                  className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 truncate">
                    <Link to={`/product/${item?._id}`}>
                      {item?.name?.slice(0, 30)}
                      {item?.name?.length > 30 && "..."}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {brands?.find((brand) => brand._id === item?.brandId)
                      ?.name || "Unknown Brand"}
                  </p>
                </div>
                <div className="mt-4">
                  {item?.salesPrice ? (
                    <div className="flex flex-col">
                      <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        ${item?.salesPrice}
                      </p>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-through">
                        ${item?.price}
                      </p>
                    </div>
                  ) : (
                    <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      ${item?.price}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
