import{a,i as c}from"./assets/vendor-CK1Rzdhu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();a.defaults.baseURL="https://pixabay.com/api";const l=new URLSearchParams({key:"54497061-8a3f1039e79f08659d000d130",image_type:"photo",lang:"en",orientation:"horizontal",safesearch:!0});function u(o){return a.get(`/?${l}&q=${o}`)}function f(o){const s=o.map(t=>`
	<li>
		<a href="${t.largeImageURL}">
			<img src="${t.webformatURL}" alt="${t.tags}">
		</a>
		<div>
			<p>Likes: ${t.likes}</p>
			<p>views: ${t.views}</p>
			<p>Comments: ${t.comments}</p>
			<p>Downloads: ${t.downloads}</p>
		</div>
	</li>`).join("");document.querySelector("ul").innerHTML=s}const m=document.querySelector(".form");m.addEventListener("submit",d);function d(o){o.preventDefault();const t=o.target.elements["search-text"].value;if(t.trim()==="")return console.log("Please fill in the field!");u(t).then(i=>{i.data.hits.length===0?c.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):f(i.data.hits)})}
//# sourceMappingURL=index.js.map
