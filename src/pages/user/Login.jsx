import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import bg_url from "../../assets/images/tesla.png";
import { toast } from "react-toastify";
import rolls_logo from "../../assets/images/rolls.png";
import { loginUserAction } from "../../entities/user/userActions";
import { CustomInputForNonChangingBg } from "../../components/custom/CustomInput";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user?._id) {
      navigate(location.state ?? "/");
    }
  }, [navigate, user?._id, location]);

  const handleOnLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return toast.error("Email and Password must be provided.");
    }
    dispatch(loginUserAction({ email, password }));
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      inputRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      inputRef: passwordRef,
    },
  ];

  return (
    <div
      className="relative text-white"
      style={{
        backgroundImage: `url(${bg_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="absolute bg-black bg-opacity-70 w-full h-full"></div>

      <div className="relative flex min-h-screen flex-col px-6 lg:px-8 items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-16 flex flex-col justify-center items-center mb-4 gap-4">
          <h2 className="mt-2 text-2xl font-bold leading-9 text-white">
            Login Now
          </h2>
          <Link to={"/"}>
            <img src={rolls_logo} className="w-20 h-20" alt="" />
          </Link>
        </div>

        <div className="mt-2 sm:mx-auto md:min-w-[550px] p-10 md:max-w-md flex justify-center rounded-lg shadow-lg border border-gray-300">
          <form className="space-y-3 w-full " onSubmit={handleOnLogin}>
            {inputs.map((item, i) => (
              <CustomInputForNonChangingBg key={i} {...item} />
            ))}

            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-2 mt-6 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-teal-500 rounded-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Login
              </button>
            </div>
            <div className="mt-3 text-sm text-end">
              <Link to={"/forget-password"} className="text-blue-500">
                {" "}
                Forget Password?
              </Link>
            </div>
            <div className="flex justify-end gap-2">
              <span className="text-white">Don&apos;t have an account?</span>
              <Link to={"/signup"} className="font-bold text-purple-500">
                Register Now
              </Link>
            </div>
          </form>
        </div>
        <div className="mt-4 font-semibold">
          <h1 className="underline">Sample User</h1>
          <h2>Email : user2@gmail.com</h2>
          <h2>Password : 22</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;