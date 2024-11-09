/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const CustomCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const length = images?.length;

    const nextSlide = () => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const startAutoSlide = () => {
      timeoutRef.current = setInterval(nextSlide, 5000);
    };

    startAutoSlide();

    return () => clearInterval(timeoutRef.current);
  }, [images]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Slides */}
      <div
        className="relative flex w-full h-[70vh] transition-all duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="text-3xl lg:text-4xl font-semibold tracking-wide mb-4">
                PREMIUM & LUXURY WATCHES
              </h1>
              <Link to="/products" className="inline-block">
                <button className="px-6 py-3 border-2 border-white rounded-full text-white font-medium tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                  Browse Shop
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation Arrows */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
      >
        &#60;
      </button>
      <button
        onClick={() =>
          setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
      >
        &#62;
      </button>

      {/* Carousel Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
