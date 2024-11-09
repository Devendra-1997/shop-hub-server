import "react-toastify/dist/ReactToastify.css";
import "swiper/swiper-bundle.css";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Pages
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/user/Login";
import MyOrders from "./pages/order/MyOrders";
import OrderConfirmation from "./pages/order/OrderConfirmation";
import ProductLanding from "./pages/product/ProductLanding";
import Products from "./pages/product/Products.jsx";
import Profile from "./pages/user/Profile";
import Signup from "./pages/user/Signup";
import VerifyAccount from "./pages/user/VerifyAccount";
import ForgetPassword from "./pages/user/ForgetPassword";

// Components
import ErrorElement from "./components/layout/ErrorElement";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header/Header";
import LoadingScreen from "./components/layout/LoadingScreen";

// Actions

import {
  fetchCategoriesAction,
  fetchSubCatAction,
} from "./entities/category/categoryActions.js";
import { fetchProductsAction } from "./entities/product/productActions.js";
import { autoLoginAction } from "./entities/user/userActions.js";
import { fetchReviewAction } from "./entities/review/reviewActions.js";

// Hooks
import useScrollToTop from "./hooks/useScrollToTop";

// Default Router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorElement />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/product/:_id", element: <ProductLanding /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/order-confirmation", element: <OrderConfirmation /> },
      { path: "/my-orders", element: <MyOrders /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/verify-account", element: <VerifyAccount /> },
  { path: "/forget-password", element: <ForgetPassword /> },
]);

// Default Layout with animation & scroll to top
function DefaultLayout() {
  const isHomeAnimation = localStorage.getItem("isHomeAnimation");
  const [isLoading, setIsLoading] = useState(isHomeAnimation ?? true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("isHomeAnimation", false);
      }, 2000);
    }
  }, [isLoading]);

  useScrollToTop();

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <div className="relative">
      <Header />
      <div className="min-h-[75vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

// Main App Component
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
    dispatch(fetchCategoriesAction());
    dispatch(fetchSubCatAction());
    dispatch(autoLoginAction());
    dispatch(fetchReviewAction());

    return () => {
      localStorage.setItem("isHomeAnimation", true);
    };
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={appRouter} />
      <ToastContainer
        position="bottom-right"
        stacked
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        newestOnTop={true}
      />
    </>
  );
}

export default App;
