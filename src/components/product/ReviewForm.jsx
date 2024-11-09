/* eslint-disable react/prop-types */
import { CustomInput } from "../custom/CustomInput";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { postReviewAction } from "../../entities/review/reviewActions";

const ReviewForm = ({ selectedProduct, hideModal }) => {
  const { form, handleOnChange } = useForm({});
  const [ratings, setRatings] = useState(1);
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { productId, orderId } = selectedProduct;
    dispatch(postReviewAction({ ...form, ratings, productId, orderId }));
    hideModal();
  };

  const inputs = [
    {
      label: "Review Title",
      name: "title",
      type: "text",
      required: true,
      placeholder: "Give your review a title",
    },
    {
      label: "Detailed Review",
      name: "message",
      as: "textarea",
      rows: "5",
      required: true,
      placeholder: "Describe your experience with the product",
    },
  ];

  return (
    <form className="space-y-4 text-sm" onSubmit={handleOnSubmit}>
      {/* Inputs */}
      {inputs.map((item) => (
        <CustomInput key={item.name} {...item} onChange={handleOnChange} />
      ))}

      {/* Rating Section */}
      <div className="mb-4 flex items-center space-x-1">
        <label className="text-sm font-medium text-gray-700">
          Rate this Product:{" "}
        </label>
        {new Array(5).fill("").map((_, i) => (
          <FaStar
            key={i}
            onClick={() => setRatings(i + 1)}
            className={`cursor-pointer text-xl transition-colors duration-200 ${
              i < ratings ? "text-yellow-500" : "text-gray-300"
            } hover:text-yellow-400`}
          />
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full rounded-md bg-gradient-to-r from-purple-600 to-purple-500 py-2 text-sm text-white shadow-md transition duration-300 hover:scale-105 hover:from-purple-500 hover:to-purple-400 active:scale-100"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
