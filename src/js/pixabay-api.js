import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const searchParams = new URLSearchParams({
  key: '54497061-8a3f1039e79f08659d000d130',
  image_type: "photo",
  lang: 'en',
  orientation: 'horizontal',
  safesearch: true,
});

export function getImagesByQuery(query) {
	// console.log(query);
	return axios.get(`/?${searchParams}&q=${query}`);
}
