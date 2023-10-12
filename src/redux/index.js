import { createStore, combineReducers } from "redux";
import langReducer from "./reducer/langReducer";

const rootReducer = combineReducers({
  lang: langReducer,
});

const store = createStore(rootReducer);

export default store;
