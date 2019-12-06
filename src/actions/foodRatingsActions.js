import { GET_FOOD_RATINGS, SET_LOADING, FOOD_RATINGS_ERROR } from "./types";

// Get food ratings
export const getFoodRatings = () => async dispatch => {
  const date = new Date();
  const threeHours = 60 * 60 * 1000 * 3;
  const initTime = JSON.parse(localStorage.getItem("initTime"));
  const timeNow = date.getTime();
  const diff = timeNow - initTime;
  try {
    setLoading();
    // Check if local storage is empty or 3 hours old/older
    if (localStorage.getItem("foodRatings") === null || diff >= threeHours) {
      const res = await fetch(
        "https://cors-anywhere.herokuapp.com/https://api.ratings.food.gov.uk/Establishments?name=yolo&address=WC2H%209NP",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-version": 2
          }
        }
      );
      const data = await res.json();

      // Save time and data for local storage as well to use for the next three hours
      localStorage.setItem("foodRatings", JSON.stringify(data));
      localStorage.setItem("initTime", JSON.parse(date.getTime()));

      dispatch({
        type: GET_FOOD_RATINGS,
        payload: data
      });
    } else {
      dispatch({
        type: GET_FOOD_RATINGS,
        payload: JSON.parse(localStorage.getItem("foodRatings"))
      });
    }
  } catch (err) {
    dispatch({
      type: FOOD_RATINGS_ERROR,
      payload: err.response
    });
  }
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
