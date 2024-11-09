/* eslint-disable react/prop-types */
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const maxRating = 5;

const Stars = ({ stars = 0 }) => {
  const ratings = [];

  if (stars > maxRating) {
    return <span className="text-red-500">Invalid Ratings</span>;
  }

  const fullRating = Math.floor(stars);
  const hasHalf = stars - fullRating;

  for (let i = 0; i < maxRating; i++) {
    if (i < fullRating) {
      ratings.push(
        <FaStar
          key={i}
          className="text-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-110"
          aria-label={`Full star ${i + 1}`}
        />
      );
    } else if (i === fullRating && hasHalf) {
      ratings.push(
        <FaRegStarHalfStroke
          key={i}
          className="text-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-110"
          aria-label={`Half star ${i + 1}`}
        />
      );
    } else {
      ratings.push(
        <FaRegStar
          key={i}
          className="text-gray-400 transition-all duration-300 ease-in-out transform hover:scale-110"
          aria-label={`Empty star ${i + 1}`}
        />
      );
    }
  }

  return <div className="flex space-x-1">{ratings}</div>;
};

export default Stars;
