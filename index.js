import{a,S as l,i as c}from"./assets/vendor-Z6SuAarM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();a.defaults.baseURL="https://pixabay.com/api";const u=new URLSearchParams({key:"54497061-8a3f1039e79f08659d000d130",image_type:"photo",lang:"en",orientation:"horizontal",safesearch:!0});function d(s){return a.get(`/?${u}&q=${s}`)}var f=new l(".gallery a",{});function m(s){const o=s.map(r=>`
	<li>
		<a href="${r.largeImageURL}">
			<img src="${r.webformatURL}" alt="${r.tags}">
		</a>
		<div class="captions">
			<p><strong>Likes:</strong> ${r.likes}</p>
			<p><strong>views:</strong> ${r.views}</p>
			<p><strong>Comments:</strong> ${r.comments}</p>
			<p><strong>Downloads:</strong> ${r.downloads}</p>
		</div>
	</li>`).join("");return document.querySelector(".gallery").innerHTML=o,f.refresh(),0}function g(){document.querySelector(".gallery").innerHTML=""}const p=document.querySelector(".form");p.addEventListener("submit",h);function h(s){s.preventDefault();const o=document.querySelector(".loader"),n=s.target.elements["search-text"].value;n.trim()!==""&&(g(),o.classList.remove("hidden"),d(n).then(e=>{e.data.hits.length===0?c.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):m(e.data.hits)}).finally(()=>{o.classList.add("hidden")}))}
//# sourceMappingURL=index.js.map
