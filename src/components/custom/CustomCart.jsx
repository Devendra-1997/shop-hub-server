import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCart } from "../../entities/cart/cartSlice";

const CustomCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.carts);

  const handleQuantityChange = (e, product) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(updateCart({ ...product, quantity: newQuantity }));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Shopping Cart
      </h1>
      <div className="space-y-8">
        <ul className="space-y-6">
          {cart?.map(
            ({ _id, thumbnail, name, salesPrice, price, quantity }) => (
              <li
                key={_id}
                className="flex justify-between items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center">
                  <img
                    src={thumbnail}
                    alt={name}
                    className="w-24 h-24 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Price: ${salesPrice || price}
                    </p>
                    <div className="flex items-center mt-2">
                      <label
                        htmlFor={`quantity-${_id}`}
                        className="text-sm text-gray-600 dark:text-gray-200 mr-2"
                      >
                        Qty:
                      </label>
                      <input
                        type="number"
                        id={`quantity-${_id}`}
                        min="1"
                        value={quantity}
                        onChange={(e) =>
                          handleQuantityChange(e, {
                            _id,
                            thumbnail,
                            name,
                            salesPrice,
                            price,
                            quantity,
                          })
                        }
                        className="w-16 p-2 text-center border rounded-lg dark:bg-gray-600 dark:text-gray-100"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleRemoveFromCart({
                      _id,
                      thumbnail,
                      name,
                      salesPrice,
                      price,
                      quantity,
                    })
                  }
                  className="bg-red-600 text-white text-sm font-medium rounded-lg px-4 py-2 shadow-md hover:bg-red-700 transition-all"
                >
                  Remove
                </button>
              </li>
            )
          )}
        </ul>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-4">
            Order Summary
          </h2>
          <ul className="space-y-4">
            {cart.map(({ _id, name, quantity, salesPrice, price }) => (
              <li
                key={_id}
                className="flex justify-between items-center text-sm text-gray-700 dark:text-gray-300"
              >
                <span>
                  {quantity} x {name}
                </span>
                <span>${((salesPrice || price) * quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-6 border-t pt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
            <span>Total</span>
            <span>
              $
              {cart
                .reduce(
                  (acc, curr) =>
                    acc + (curr?.salesPrice || curr?.price) * curr?.quantity,
                  0
                )
                .toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCart;
