import { setProducts } from "./productSlice";
import { fetchProductsAxios } from "./productAxiosHelper";

// fetch all products
export const fetchProductsAction = () => async (dispatch) => {
  const { status, products } = await fetchProductsAxios();
  if (status === "success") {
    dispatch(setProducts(products));
  }
};
