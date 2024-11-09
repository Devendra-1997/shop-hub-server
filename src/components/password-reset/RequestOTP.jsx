/* eslint-disable react/prop-types */
import { useRef } from "react";
import { CustomInput } from "../custom/CustomInput";

export const RequestOTP = ({ handleOnOTPRequest }) => {
  const emailRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    email && handleOnOTPRequest(email);
  };

  const inputs = {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    inputRef: emailRef,
  };

  return (
    <form
      className="shadow-lg p-6 bg-white dark:bg-gray-800 rounded-lg space-y-4 transition duration-300 ease-in-out transform hover:scale-105"
      onSubmit={handleOnSubmit}
    >
      <h3 className="text-center text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Request OTP
      </h3>
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
        Enter your email to receive a one-time password
      </p>

      <CustomInput {...inputs} />

      <button
        className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md shadow-md font-medium transition duration-200"
        type="submit"
      >
        Request Now
      </button>
    </form>
  );
};
