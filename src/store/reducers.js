import {
  GET_IMAGES,
  SET_SECTION,
  SET_SORT,
  SET_WINDOW,
  TOGGLE_VIRAL,
  SELECT_IMAGE
} from "./actionTypes";

export function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case GET_IMAGES:
      return { ...state, images: action.data };
    case SET_SECTION:
      return { ...state, section: action.data };
    case SET_SORT:
      return { ...state, sort: action.data };
    case SET_WINDOW:
      return { ...state, window: action.data };
    case TOGGLE_VIRAL:
      return { ...state, viral: !state.viral };
    case SELECT_IMAGE:
        return { ...state, selectedImage: action.data };
    default:
      return state;
  }
}
