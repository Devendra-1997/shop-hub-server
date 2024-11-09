import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-purple-300 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[15vh] flex flex-col justify-center items-center space-y-4 py-6">
        <h1 className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 tracking-widest font-sans">
          &copy; {new Date().getFullYear()} All rights reserved | Made by
          Devendra
        </h1>
        <div className="flex space-x-6">
          <a
            href="https://github.com/Devendra-1997"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors duration-300 transform hover:scale-110"
          >
            <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://www.devendradhakal.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
            className="text-black-500 hover:text-purple-700 transition-colors duration-300 transform hover:scale-110"
          >
            <GlobeAltIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/devendra-dhakal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="mailto:devendradhakal92@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
            className="text-red-600 hover:text-red-800 transition-colors duration-300 transform hover:scale-110"
          >
            <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
