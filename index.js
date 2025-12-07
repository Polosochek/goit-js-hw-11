import{a as u,S as p,i as c}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com/api/";async function y(s){const o={key:"53595535-e5f82fa4261a3268ac261655e",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:50};try{return(await u.get("/",{params:o})).data}catch(r){return console.error("Error fetching images:",r),null}}const f=document.querySelector(".gallery"),a=document.querySelector("[data-loader]"),g=new p(".gallery a");function h(s){const o=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:i,comments:m,downloads:d})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${r}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${t}</p>
          <p class="info-item"><b>Views</b> ${i}</p>
          <p class="info-item"><b>Comments</b> ${m}</p>
          <p class="info-item"><b>Downloads</b> ${d}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){f.innerHTML=""}function L(){a&&a.classList.remove("hidden")}function l(){a&&a.classList.add("hidden")}const v=document.getElementsByTagName("button")[0],$=document.getElementsByName("search-text")[0];v.addEventListener("click",async function(s){s.preventDefault();const o=$.value.trim();o&&(b(),L(),y(o).then(r=>{l(),r&&r.hits.length>0?h(r.hits):c.error({title:"Sorry, there are no images matching your search query. Please try again!",timeout:4e3})}).catch(r=>{l(),c.error({title:"Не вдалось завантажити зображення",message:r.message,timeout:4e3})}))});
//# sourceMappingURL=index.js.map
