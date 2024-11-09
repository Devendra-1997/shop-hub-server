import { axiosApiCall } from "../../utility/axiosHelper";

const orderEP = import.meta.env.VITE_SERVER_API + "/v1/orders";

export const fetchClientSecretAxios = (obj) => {
  return axiosApiCall({
    url: orderEP + "/create-payment-intent",
    method: "post",
    data: obj,
    isPrivate: true,
    isToast: true,
  });
};

// fetch all my orders
export const fetchAllOrders = () => {
  return axiosApiCall({
    url: orderEP + "/my-orders",
    method: "get",
    isPrivate: true,
  });
};
