import{a as d,S as g,i as l}from"./assets/vendor-dNBuWDsd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="53429137-43b45d58ff46365b79c8d2911";function b(i){const o={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(h,{params:o}).then(r=>r.data)}const u=document.querySelector(".gallery"),a=document.querySelector(".loader"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function S(i){const o=i.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:p})=>`
          <li class="gallery-item">
            <a href="${s}">
              <img src="${r}" alt="${e}" loading="lazy" />
            </a>
            <ul class="info">
              <li>
                <b>Likes</b>
                <span>${t}</span>
              </li>
              <li>
                <b>Views</b>
                <span>${n}</span>
              </li>
              <li>
                <b>Comments</b>
                <span>${f}</span>
              </li>
              <li>
                <b>Downloads</b>
                <span>${p}</span>
              </li>
            </ul>
          </li>`).join("");u.insertAdjacentHTML("beforeend",o),L.refresh()}function w(){u.innerHTML=""}function x(){a.textContent="Loading images, please wait...",a.classList.add("visible")}function c(){a.classList.remove("visible"),a.textContent=""}const m=document.querySelector(".form"),q=m.elements["search-text"];m.addEventListener("submit",v);function v(i){i.preventDefault();const o=q.value.trim();if(!o){l.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}w(),x(),b(o).then(r=>{if(c(),!r.hits||r.hits.length===0){l.error({title:"Eroor",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432});return}S(r.hits)}).catch(r=>{c(),l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",maxWidth:432}),console.error(r)})}
//# sourceMappingURL=index.js.map
