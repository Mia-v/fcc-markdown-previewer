import { combineReducers } from "redux";
import contentReducer from "./contentReducer";

const reducers = combineReducers({
  content: contentReducer
});

export default reducers;