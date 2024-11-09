import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocalStorage } from "react-use";
import { setDarkMode } from "../../redux/darkModeSlice";

const DarkMode = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const [value, setValue] = useLocalStorage("dark_mode", true);

  // Sync Redux state with localStorage
  useEffect(() => {
    dispatch(setDarkMode(value));
  }, [value, dispatch]);

  // Apply dark mode class to the document root
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      isDarkMode ? root.classList.add("dark") : root.classList.remove("dark");
    }
    setValue(isDarkMode); // Update localStorage
  }, [setValue, isDarkMode]);

  // Handle dark mode toggle
  const handleToggle = () => {
    const newDarkMode = !isDarkMode;
    setValue(newDarkMode);
    dispatch(setDarkMode(newDarkMode));
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      className="p-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none"
    >
      {isDarkMode ? (
        <SunIcon className="h-7 w-7 text-yellow-500 transition-transform transform hover:scale-110" />
      ) : (
        <MoonIcon className="h-7 w-7 text-gray-500 dark:text-white transition-transform transform hover:scale-110" />
      )}
    </button>
  );
};

export default DarkMode;
