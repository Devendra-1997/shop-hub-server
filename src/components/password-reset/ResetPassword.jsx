/* eslint-disable react/prop-types */
import { CustomInputForNonChangingBg } from "../custom/CustomInput";
import { toast } from "react-toastify";
import { useRef } from "react";

export const ResetPassword = ({ handleOnPasswordReset }) => {
  const otpRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const otp = otpRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    handleOnPasswordReset(otp, password);
  };

  const inputs = [
    {
      label: "OTP",
      name: "otp",
      type: "number",
      placeholder: "Enter OTP",
      required: true,
      inputRef: otpRef,
    },
    {
      label: "New Password",
      name: "password",
      type: "password",
      placeholder: "Enter new password",
      required: true,
      inputRef: passwordRef,
    },
    {
      label: "Confirm New Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm new password",
      required: true,
      inputRef: confirmPasswordRef,
    },
  ];

  return (
    <form
      className="shadow-lg p-6 bg-white dark:bg-gray-800 rounded-lg space-y-4 transition duration-300 ease-in-out transform hover:scale-105"
      onSubmit={handleOnSubmit}
    >
      <h3 className="text-center text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Reset Password
      </h3>
      <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
        Enter the OTP and set your new password
      </p>
      <hr className="mb-4 border-gray-300 dark:border-gray-600" />

      {inputs.map((input) => (
        <CustomInputForNonChangingBg key={input.name} {...input} />
      ))}

      <button
        className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md shadow-md font-medium transition duration-200"
        type="submit"
      >
        Reset Password
      </button>
    </form>
  );
};
