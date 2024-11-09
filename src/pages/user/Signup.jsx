import { Link, useNavigate } from "react-router-dom";
import { CustomInputForNonChangingBg } from "../../components/custom/CustomInput";
import bg_url from "./../../assets/images/audi.avif";
import { toast } from "react-toastify";
import { useForm } from "../../hooks/useForm";
import shop_logo from "../../assets/images/shophub.png";
import { signupUserAction } from "../../entities/user/userActions";

const Signup = () => {
  const { form, handleOnChange } = useForm([]);
  const navigate = useNavigate();

  const handleOnSignup = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("Passwords must match");
    }

    const status = await signupUserAction(rest);
    if (status === "success") {
      navigate("/login");
    }
  };

  const inputs = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      placeholder: "Enter your first name",
      required: true,
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      placeholder: "Enter your last name",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "example@example.com",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "tel",
      placeholder: "Enter your phone number",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm your password",
      required: true,
    },
  ];

  return (
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${bg_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      <div className="relative z-10 flex flex-col items-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-16 flex flex-col justify-center items-center mb-4 gap-4">
          <h2 className="text-center text-3xl font-bold leading-tight text-white">
            Join Us Today!
            <span className="block mt-1 text-sm text-gray-200">
              Fill in your details to get started
            </span>
          </h2>
          <Link to="/">
            <img src={shop_logo} className="w-24 h-24" alt="ShopHub Logo" />
          </Link>
        </div>

        <div className="w-full max-w-md px-10 py-12 mt-4 bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg sm:mx-auto">
          <form className="space-y-1" onSubmit={handleOnSignup}>
            {inputs.map((item, i) => (
              <CustomInputForNonChangingBg
                key={i}
                {...item}
                onChange={handleOnChange}
              />
            ))}

            <button
              type="submit"
              className="w-full py-2 mt-6 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-teal-500 rounded-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Register
            </button>

            <div className="flex items-center justify-center gap-2 mt-4 text-gray-700">
              <span>Already have an account?</span>
              <Link
                to="/login"
                className="font-semibold text-purple-500 hover:text-teal-500"
              >
                Login Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
