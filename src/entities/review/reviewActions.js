import { toast } from "react-toastify";
import { fetchReviewAxios, postReviewAxios } from "./reviewAxiosHelper";
import { setReviews } from "./reviewSlice";

// fetch all reviews
export const fetchReviewAction = () => async (dispatch) => {
  const { status, reviews } = await fetchReviewAxios();
  if (status === "success") {
    dispatch(setReviews(reviews));
  }
};

// create a review
export const postReviewAction = (reviewObj) => async (dispatch) => {
  const result = await postReviewAxios(reviewObj);

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  // once a revew is submitted, we refetch burrows
  dispatch(fetchReviewAction());
};
