import {
  AtSymbolIcon,
  CalendarDateRangeIcon,
  CheckCircleIcon,
  MapPinIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setOrderIdInStore } from "../../entities/order/orderSlice";
import { emptyCart } from "../../entities/cart/cartSlice";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { orderId, shippingAddress } = useSelector((state) => state.orders);
  const { cart } = useSelector((state) => state.carts);

  const options = { month: "long", day: "numeric" };
  const date = new Date();
  const day7 = new Date(date);
  day7.setDate(day7.getDate() + 7);

  const fromDate = date.toLocaleDateString("en-US", options);
  const toDate = day7.toLocaleDateString("en-US", options);

  const [currentCart] = useState(cart || []);

  useEffect(() => {
    if (user?._id && cart?.length > 0) {
      dispatch(setOrderIdInStore(null));
      dispatch(emptyCart());
    }
  }, [dispatch, cart, user?._id]);

  if (!user?._id) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Link
          to={"/login"}
          state={location.pathname}
          className="py-2 px-16 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition"
        >
          Login To Checkout
        </Link>
      </div>
    );
  }

  if (currentCart?.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-500">
          Your cart is empty.{" "}
          <Link
            to="/products"
            className="text-indigo-600 font-semibold underline"
          >
            Shop now
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank you for your order, {user?.firstName}!
          </h1>
          <p className="text-lg text-gray-600">
            Your Order{" "}
            <span className="font-bold text-gray-800">{orderId}</span> is being
            processed. We have sent a receipt to{" "}
            <span className="font-semibold text-gray-800">{user?.email}</span>.
          </p>
          <CheckCircleIcon className="w-20 h-20 text-green-500 my-6" />
        </div>

        <div className="flex justify-center mt-6">
          <Link
            to={"/my-orders"}
            className="text-indigo-600 font-medium hover:underline"
          >
            View Previous Orders
          </Link>
        </div>

        {/* Order Summary */}
        <div className="border rounded-lg shadow-lg overflow-hidden mt-8 max-w-3xl mx-auto">
          <div className="bg-indigo-700 text-white py-4 px-6 text-right">
            <span className="text-lg font-semibold">
              Total: $
              {currentCart
                .reduce(
                  (acc, curr) =>
                    acc + curr.quantity * (curr.salesPrice ?? curr.price),
                  0
                )
                .toFixed(2)}
            </span>
          </div>

          <div className="p-6 space-y-8">
            <ul className="space-y-6">
              {currentCart.map((product) => (
                <li key={product._id} className="flex items-start space-x-4">
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="h-24 w-24 object-cover rounded-lg"
                    />
                  </Link>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Quantity: {product.quantity}
                    </p>
                    <p className="text-sm text-gray-500">
                      Amount: $
                      {(
                        (product.salesPrice || product.price) * product.quantity
                      ).toFixed(2)}
                    </p>
                    <button className="mt-2 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-500 transition">
                      Buy Again
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
              {/* Estimated Arrival */}
              <div className="flex gap-3">
                <CalendarDateRangeIcon className="h-7 w-7 text-indigo-700" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Estimated Arrival
                  </h2>
                  <p className="text-gray-500">
                    {fromDate} - {toDate}
                  </p>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="flex gap-3">
                <MapPinIcon className="h-7 w-7 text-indigo-700" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Shipping Address
                  </h2>
                  <p className="text-gray-500">{shippingAddress?.line1}</p>
                  <p className="text-gray-500">
                    {shippingAddress?.city} {shippingAddress?.postal_code}
                  </p>
                  <p className="text-gray-500">{shippingAddress?.state}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Support */}
          <div className="bg-gray-100 p-6">
            <div className="flex items-start gap-3">
              <QuestionMarkCircleIcon className="h-7 w-7 text-indigo-700" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Have a Question?
                </h2>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-gray-700" />
                    <p className="text-gray-700">(02) 9876 5432</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <AtSymbolIcon className="h-5 w-5 text-gray-700" />
                    <p className="text-gray-700">support@vikiamy.com</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Need to return an item? Present this receipt in-store or contact
              our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
