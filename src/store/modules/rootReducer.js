import { combineReducers } from "redux";
import authetication from "./authentication/reducer";

const rootReducer = combineReducers({
  authetication,
})

export default rootReducer;