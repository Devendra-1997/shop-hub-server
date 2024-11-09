import { axiosApiCall } from "../../utility/axiosHelper";

// Define the base URL for the product API
const PRODUCT_EP = import.meta.env.VITE_SERVER_API + "/v1/products";

// fetch active products => get
export const fetchProductsAxios = () => {
  return axiosApiCall({
    url: PRODUCT_EP,
    method: "GET",
  });
};

// fetch single product by ID => get
export const fetchProductByIdAxios = (id) => {
  return axiosApiCall({
    url: PRODUCT_EP + "/" + id,
    method: "GET",
  });
};
