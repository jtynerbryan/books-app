import { combineReducers } from "redux";
import books from "./books";
import auth from "./auth";

const rootReducer = combineReducers({
  books: books,
  auth: auth
});

export default rootReducer;
