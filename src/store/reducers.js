import { GET_IMAGES } from "./actionTypes";

export function reducer(state, action) {
  switch (action.type) {
    case GET_IMAGES:
      return { ...state, images: action.data };
    default:
      return state;
  }
}
