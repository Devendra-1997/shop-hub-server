import { axiosApiCall } from "../../utility/axiosHelper";

// CATEGORY API URL
const CATEGORY_EP = import.meta.env.VITE_SERVER_API + "/v1/categories";

// fetch active categories => get
export const fetchCategoriesAxios = () => {
  return axiosApiCall({
    url: CATEGORY_EP,
    method: "GET",
  });
};

// fetch active categories => get
export const fetchSubCatAxios = () => {
  return axiosApiCall({
    url: CATEGORY_EP + "/sub-categories",
    method: "GET",
  });
};
