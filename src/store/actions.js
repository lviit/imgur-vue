import { GET_IMAGES } from "./actionTypes";

export function getImages() {
  return async function(dispatch) {
    const clientId = "c9edbdbfc0c2134";
    const foo = await fetch("https://api.imgur.com/3/gallery/hot/viral/0?album_previews=true", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Client-ID ${clientId}`
      }
    });
    const { data } = await foo.json();
    console.log(data);
    dispatch({ type: GET_IMAGES, data });
  };
}
