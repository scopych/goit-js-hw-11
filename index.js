import{a as i,S as l,i as c}from"./assets/vendor-Z6SuAarM.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();i.defaults.baseURL="https://pixabay.com/api";const u=new URLSearchParams({key:"54497061-8a3f1039e79f08659d000d130",image_type:"photo",lang:"en",orientation:"horizontal",safesearch:!0});function d(o){return i.get(`/?${u}&q=${o}`)}var m=new l(".gallery a",{});function f(o){const s=o.map(r=>`
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
	</li>`).join("");return document.querySelector(".gallery").innerHTML=s,m.refresh(),0}function g(){document.querySelector(".gallery").innerHTML=""}const p=document.querySelector(".form");p.addEventListener("submit",h);function h(o){o.preventDefault();const s=document.querySelector(".loader"),n=o.target.elements["search-text"].value;n.trim()!==""&&(g(),s.classList.remove("hidden"),d(n).then(e=>{if(e.data.hits.length===0)c.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{f(e.data.hits);const t=e.data.hits.map(a=>y(a.webformatURL));return Promise.all(t)}}).finally(()=>{s.classList.add("hidden")}))}function y(o){return new Promise((s,r)=>{o.complete?s():(o.onload=s,o.onerror=r)})}
//# sourceMappingURL=index.js.map
