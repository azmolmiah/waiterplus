import {
  GET_FOOD_RATINGS,
  SET_LOADING,
  FOOD_RATINGS_ERROR
} from "../actions/types";

const initialState = {
  foodRatings: null,
  loading: false,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FOOD_RATINGS:
      return {
        ...state,
        foodRatings: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case FOOD_RATINGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
