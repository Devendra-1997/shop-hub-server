import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import userReducer from "../entities/user/UserSlice";
import reviewReducer from "../entities/review/reviewSlice";
import productReducer from "../entities/product/productSlice";
import orderReducer from "../entities/order/orderSlice";
import cartReducer from "../entities/cart/cartSlice";
import categoryReducer from "../entities/category/categorySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoryReducer,
    products: productReducer,
    carts: cartReducer,
    orders: orderReducer,
    reviews: reviewReducer,
    darkMode: darkModeReducer,
  },
});

export default store;
