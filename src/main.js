import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery }    from './js/render-functions.js';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const loader = document.querySelector(".loader");
  const form = event.target;
  const search_text = form.elements["search-text"].value;
  
  if (search_text.trim() === "") {
    return;
  } else {
  	clearGallery();
	// This removes the "hidden" class, making the loader visible again
	loader.classList.remove("hidden");

  	getImagesByQuery(search_text)
		.then(resp => {
			if (resp.data.hits.length === 0) {
				iziToast.error({
				    title: '',
				    position: 'topRight',
				    message: 'Sorry, there are no images matching your search query. Please try again!',
				});
			} else {
				createGallery(resp.data.hits);
				// 3. Create a list of promises (one for each image)
			      // const imagePromises = imgs.map(img => waitForImage(img));
			
			      // 4. Return this promise so the chain stays open
			      // return Promise.all(imagePromises);
			}

		})
		.finally( () => {
			// This adds the "hidden" class, making the loader visible again
			loader.classList.add("hidden");
		});
  }
}

function waitForImage(imgElement) {
  return new Promise((resolve, reject) => {
    if (imgElement.complete) {
      resolve(); // Image was already cached/loaded
    } else {
      imgElement.onload = resolve;
      imgElement.onerror = reject;
    }
  });
}



