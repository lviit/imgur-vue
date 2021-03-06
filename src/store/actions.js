import {
  GET_IMAGES,
  SET_SECTION,
  SET_SORT,
  SET_WINDOW,
  TOGGLE_VIRAL,
  SELECT_IMAGE
} from "./actionTypes";

export function setSection(section) {
  return { type: SET_SECTION, data: section };
}

export function setSort(sort) {
  return { type: SET_SORT, data: sort };
}

export function setWindow(window) {
  return { type: SET_WINDOW, data: window };
}

export function toggleViral() {
  return { type: TOGGLE_VIRAL };
}

export function selectImage(id) {
  return { type: SELECT_IMAGE, data: id };
}

export function getImages() {
  return async (dispatch, getState) => {
    const { section, sort, window, viral } = getState();
    const clientId = "c9edbdbfc0c2134";
    const response = await fetch(
      `http://localhost:3000/api/3/gallery/${section}/${sort}/${window}?showViral=${viral}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Client-ID ${clientId}`
        }
      }
    );
    const { data } = await response.json();
    //console.log(data);
    dispatch({ type: GET_IMAGES, data });
  };
}
