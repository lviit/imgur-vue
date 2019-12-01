import { createStore, applyMiddleware } from "redux";
import { reducer } from "../store/reducers";
import thunk from "redux-thunk";

const initialState = {
  images: [],
  section: "hot",
  sort: "viral",
  window: "day",
  viral: false,
  selectedImage: ""
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
