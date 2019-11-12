import { combineReducers } from "redux";
import detailsReducer from "./detailsReducer";
import servicesReducer from "./servicesReducer";

export default combineReducers({
  details: detailsReducer,
  services: servicesReducer
});
