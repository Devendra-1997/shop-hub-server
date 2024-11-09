/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../entities/cart/CartActions";

export const CustomCard = ({ product }) => {
  const { _id, thumbnail, name, brand, price, salesPrice } = product;

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCartAction({ ...item, quantity: 1 }));
  };

  return (
    <div className="max-w-xs rounded-lg shadow-lg overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image and Add to Cart Button */}
      <div className="relative bg-light dark:bg-dark rounded-t-lg overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <button
            onClick={() => handleAddToCart(product)}
            className="w-4/5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg transform hover:scale-105 transition duration-300"
          >
            ADD TO CART
          </button>
        </div>
        <Link to={`/product/${_id}`} className="block">
          <img
            className="object-cover object-center w-full h-72 md:h-80 transition-transform duration-300 group-hover:scale-110"
            src={thumbnail}
            alt="Product-Image"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="p-5 bg-light dark:bg-dark rounded-b-lg">
        <h2 className="text-gray-500 dark:text-gray-300 text-sm font-medium">
          {brand}
        </h2>
        <h3 className="mt-1 text-xl font-semibold text-gray-800 dark:text-gray-100">
          {name}
        </h3>
        <div className="mt-2 flex items-center gap-4">
          {salesPrice ? (
            <>
              <span className="text-lg line-through text-gray-400 dark:text-gray-500">
                ${new Intl.NumberFormat().format(price)} AUD
              </span>
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                ${new Intl.NumberFormat().format(salesPrice)} AUD
              </span>
            </>
          ) : (
            <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              ${new Intl.NumberFormat().format(price)} AUD
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
