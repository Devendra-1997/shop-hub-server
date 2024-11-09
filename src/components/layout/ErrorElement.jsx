import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header/Header";

const ErrorElement = () => {
  return (
    <div>
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-6xl font-extrabold text-purple-600 dark:text-purple-400">
            404
          </h1>
          <p className="mt-4 text-2xl text-gray-700 dark:text-gray-300">
            Oops! The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block text-white bg-purple-600 hover:bg-purple-700 font-medium py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            Go Back Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default ErrorElement;
