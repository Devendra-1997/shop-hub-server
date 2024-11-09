import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomCart from "../../components/custom/CustomCart";

const Cart = () => {
  const { cart } = useSelector((state) => state.carts);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {!cart.length ? (
        <div className="flex flex-col items-center min-h-[50vh]">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Your cart is empty.
          </p>
          <Link
            to="/products"
            className="mt-4 text-purple-600 hover:text-purple-500 transition font-semibold underline"
          >
            Shop now
          </Link>
        </div>
      ) : (
        <div className="container mx-auto p-6 lg:p-10">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 lg:p-10">
            <CustomCart
              buttonTitle="Proceed to Checkout"
              buttonLink="/checkout"
            />

            {/* Checkout Button */}
            <Link
              to="/checkout"
              className="mt-6 w-full block text-center py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md font-semibold transition duration-200"
            >
              Checkout
            </Link>

            <div className="text-center mt-6 font-semibold text-gray-700 dark:text-gray-300">
              OR
            </div>

            {/* Continue Shopping Link */}
            <Link
              to="/products"
              className="mt-4 block text-center text-sm font-semibold text-purple-600 hover:text-purple-700 underline transition duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
