import{S as f,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(i){const r="https://pixabay.com/api/",o="47437973-d70be85f5be71cfd9f8f29695",n=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${n}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}console.log(p());function m(i){return i.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:s,downloads:u})=>`
   <a class="gallery-item" href="${o}">
   <div class=all-gallary>
   <img src="${r}" alt="${n}">
   <div class="description">
   <p>Likes: <span>"${e}"</span></p>
   <p>Views: <span>"${t}"</span></p>
   <p>Comments: <span>"${s}"</span></p>
   <p>Downloads: <span>"${u}"</span></p>
   </div>
   </div>
   </a>
    `).join("")}const d=document.querySelector(".form-search"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");let y=new f(".gallery-item",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});d.addEventListener("submit",h);function h(i){i.preventDefault(),l.innerHTML="",c.style.display="block";const r=i.target.elements.query.value.trim();if(r===""){a.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}l.innerHTML="",c.style.display="block",p(r).then(o=>{if(o.hits.length===0){a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const n=m(o.hits);l.innerHTML=n,y.refresh()}).catch(o=>{a.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{c.style.display="none",i.target.reset()})}
//# sourceMappingURL=index.js.map
