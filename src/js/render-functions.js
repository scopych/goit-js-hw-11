

export function createGallery (images) {
	const listItems = images.map(obj => `
	<li>
		<a href="${obj.largeImageURL}">
			<img src="${obj.webformatURL}" alt="${obj.tags}">
		</a>
		<div>
			<p>Likes: ${obj.likes}</p>
			<p>views: ${obj.views}</p>
			<p>Comments: ${obj.comments}</p>
			<p>Downloads: ${obj.downloads}</p>
		</div>
	</li>`).join('');
	
	document.querySelector('ul').innerHTML = listItems;
}
