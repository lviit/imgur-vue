import { createStore, applyMiddleware } from "redux";
import { reducer } from "../store/reducers";
import thunk from "redux-thunk";

const initialState = {
  images: [],
  counterValue: 0,
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
