import { axiosApiCall } from "../../utility/axiosHelper";

// Define the base URL for the reviews API
const review_EP = import.meta.env.VITE_SERVER_API + "/v1/reviews";

export const postReviewAxios = (obj) => {
  return axiosApiCall({
    url: review_EP,
    method: "post",
    data: obj,
    isPrivate: true,
    isToast: true,
  });
};

export const fetchReviewAxios = () => {
  return axiosApiCall({
    url: review_EP,
    method: "get",
  });
};
