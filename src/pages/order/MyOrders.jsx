import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllOrdersAction } from "../../entities/order/orderActions";
import { addToCartAction } from "../../entities/cart/CartActions";
import { CustomModal } from "../../components/custom/CustomModal";
import ReviewForm from "../../components/product/ReviewForm";

const MyOrders = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { myOrders } = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (!user?._id) {
      navigate("/login");
      return;
    }
    dispatch(fetchAllOrdersAction());
  }, [dispatch, navigate, user]);

  const sortedOrderByDate = [...myOrders]?.sort((a, b) => {
    const dateA = new Date(a?.createdAt);
    const dateB = new Date(b?.createdAt);
    return dateB - dateA;
  });

  const hideModal = () => setShowModal(false);
  const handleReview = (productId, orderId) => {
    setSelectedProduct({ productId, orderId });
    setShowModal(true);
  };
  const handleBuyAgain = (_id) => {
    const selectedItem = products?.find((item) => item?._id === _id);
    dispatch(addToCartAction({ ...selectedItem, quantity: 1 }));
    navigate("/checkout");
  };

  if (myOrders?.length === 0) {
    return (
      <div className="flex justify-center min-h-[50vh] items-center">
        <p className="text-gray-600 dark:text-gray-400">
          No orders found.{" "}
          <Link to="/products" className="text-purple-600 hover:underline">
            Shop now.
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="text-sm">
      {showModal && (
        <CustomModal title="Leave a Review" onHide={hideModal}>
          <ReviewForm selectedProduct={selectedProduct} hideModal={hideModal} />
        </CustomModal>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-center mb-8 font-bold text-2xl text-gray-800 dark:text-gray-200">
          My Orders
        </h1>

        {/* Order History */}
        <div className="space-y-6">
          {sortedOrderByDate?.map((order) => (
            <div
              key={order?._id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 bg-white dark:bg-gray-800 transition-transform transform hover:scale-[1.01]"
            >
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <div className="space-y-1">
                  <span className="block text-gray-600 dark:text-gray-300 font-medium">
                    Order ID
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {order?.orderId}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="block text-gray-600 dark:text-gray-300 font-medium">
                    Order Date
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(order?.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="block text-gray-600 dark:text-gray-300 font-medium">
                    Status
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      order?.orderStatus === "delivered"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {order?.orderStatus?.toUpperCase()}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="block text-gray-600 dark:text-gray-300 font-medium">
                    Total Amount
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ${order?.amount}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {order?.items?.map((item) => (
                  <div
                    key={item?._id}
                    className="flex items-center justify-between p-4 border rounded-lg bg-gray-50 dark:bg-gray-700"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={
                          products?.find((itm) => itm?._id === item?._id)
                            ?.thumbnail
                        }
                        alt={item?.name}
                        className="h-20 w-20 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-gray-100">
                          {item?.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Quantity: {item?.quantity}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          Price: ${item?.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Link
                        to={`/product/${item?._id}`}
                        className="px-4 py-2 rounded-lg border dark:border-gray-600 text-gray-600 dark:text-gray-200 hover:bg-teal-500 hover:text-white transition"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleBuyAgain(item?._id)}
                        className="px-4 py-2 rounded-lg border dark:border-gray-600 text-gray-600 dark:text-gray-200 hover:bg-teal-500 hover:text-white transition"
                      >
                        Buy Again
                      </button>
                      <button
                        onClick={() => handleReview(item?._id, order?.orderId)}
                        className="px-4 py-2 rounded-lg border dark:border-gray-600 text-gray-600 dark:text-gray-200 hover:bg-teal-500 hover:text-white transition"
                      >
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
