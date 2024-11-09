/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoryCard = ({ title, to, image }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <Link to={to} className="relative w-full h-full flex justify-center">
        <div className="absolute bottom-4 w-full p-4 flex flex-col justify-center items-center text-center">
          <button className="py-4 px-8 w-[200px] bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:bg-yellow-700 rounded-lg font-bold text-xl transition duration-300">
            {title}
          </button>
        </div>
        <img
          className="object-cover object-center w-full h-full transition-transform duration-300 transform hover:scale-110"
          src={image}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default CategoryCard;
