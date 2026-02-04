import { getImagesByQuery } from './js/pixabay-api.js';

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const search_text = form.elements["search-text"].value;
  
  if (search_text.trim() === "") {
    return console.log("Please fill in the field!");
  } else {
        getImagesByQuery(search_text);
  }
}
