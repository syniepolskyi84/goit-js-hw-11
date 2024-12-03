import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import showGallery from "./render-functions"
import { hideLoader } from "../main"


const options = {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionSelector: "img",
  captionDelay: 250,
};


export default function searchImages(userSearch) {
  const apiKey = "47437973-d70be85f5be71cfd9f8f29695";
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${userSearch}&image_type=photo`
  return fetch(url)
    .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
    })
    .then((data) => {
      if (data.hits.length === 0) {
        hideLoader();
        iziToast.error({
          position: 'topRight',
          color: 'red',
          message: `Sorry, there are no images matching<br>your search query. Please try again!`,
        });
      } else {        
      showGallery(data);
      hideLoader();
      const lightbox = new SimpleLightbox('.gallery a', options);
      lightbox.refresh();
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};