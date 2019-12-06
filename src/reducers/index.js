import { combineReducers } from "redux";
import detailsReducer from "./detailsReducer";
import servicesReducer from "./servicesReducer";
import foodRatingsReducer from "./foodRatingsReducer";

export default combineReducers({
  details: detailsReducer,
  services: servicesReducer,
  foodRatings: foodRatingsReducer
});
