import { axiosApiCall } from "../../utility/axiosHelper";

// USER API URL
const USER_API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/v1/user`;

// Public Route | Create User
export const signupUserAxios = (userObj) => {
  return axiosApiCall({
    method: "post",
    url: USER_API_URL,
    data: userObj,
  });
};

// Public | Verify Account
export const verifyAccountAxios = (verificationObj) => {
  return axiosApiCall({
    method: "post",
    url: `${USER_API_URL}/verify-account`,
    data: verificationObj,
    isToast: true,
  });
};

// Public | Login User
export const loginUserAxios = (loginData) => {
  return axiosApiCall({
    method: "post",
    url: `${USER_API_URL}/login`,
    data: loginData,
    isToast: true,
  });
};

// Private | Fetch User Profile
export const fetchUserAxios = () => {
  return axiosApiCall({
    method: "get",
    url: `${USER_API_URL}/profile`,
    isPrivate: true,
  });
};

// Public | Request OTP
export const requestOTP = (otpData) => {
  return axiosApiCall({
    method: "post",
    url: `${USER_API_URL}/otp`,
    data: otpData,
  });
};

// Public | Reset Password
export const resetPasswordAxios = (resetData) => {
  return axiosApiCall({
    method: "post",
    url: `${USER_API_URL}/password/reset`,
    data: resetData,
  });
};

// Private | Update Profile
export const editProfileDetailAxios = (updateData, updateType) => {
  return axiosApiCall({
    method: "put",
    url:
      updateType === "details"
        ? `${USER_API_URL}/update-profile`
        : updateType === "profile-image"
        ? `${USER_API_URL}/update-image`
        : `${USER_API_URL}/update-password`,
    data: updateData,
    isPrivate: true,
    isToast: true,
  });
};

// Private | Renew Access JWT
export const renewAccessJWTAxios = async () => {
  const axiosObj = {
    method: "get",
    url: `${USER_API_URL}/renew-access`,
    isPrivate: true,
    isRefresh: true,
  };

  const { accessJWT } = await axiosApiCall(axiosObj);
  if (accessJWT) sessionStorage.setItem("accessJWT", accessJWT);

  return accessJWT;
};
