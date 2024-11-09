import { motion } from "framer-motion";
import tesla_logo from "../../assets/images/tesla.png";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="flex justify-center items-center"
      >
        <img
          src={tesla_logo}
          alt="tesla Logo"
          className="h-32 w-32 object-contain"
        />
      </motion.div>
      <h1 className="text-2xl font-semibold mt-8 text-gray-700 tracking-wide">
        Welcome to Shop Hub
      </h1>
    </div>
  );
};

export default LoadingScreen;
