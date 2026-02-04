import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery }    from './js/render-functions.js';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const search_text = form.elements["search-text"].value;
  
  if (search_text.trim() === "") {
    return console.log("Please fill in the field!");
  } else {
  	getImagesByQuery(search_text)
		.then(resp => {
			if (resp.data.hits.length === 0) {
				iziToast.error({
				    title: '',
				    position: 'topRight',
				    message: 'Sorry, there are no images matching your search query. Please try again!',
				});
				
				// console.log("Sorry, there are no images matching your search query. Please try again!");
			} else {
				createGallery(resp.data.hits);
			}
		});
  }
}
