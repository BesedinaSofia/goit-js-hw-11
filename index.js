import{S as c,i}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function l(a){const o="48567917-ad299c95fd5743fafa8b1579d",s="https://pixabay.com/api/",t=new URLSearchParams({key:o,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});try{const e=await fetch(`${s}?${t}`);if(!e.ok)throw new Error("Failed to fetch images");const r=await e.json();return r.totalHits>0?r.hits.forEach(n=>{}):console.log("No hits"),r}catch(e){throw console.error("Error fetching images:",e),e}}function d(a){const o=document.querySelector("#gallery");o.innerHTML=a.map(t=>`
    <a href="${t.largeImageURL}" class="gallery-item" data-lightbox="gallery">
      <img src="${t.webformatURL}" alt="${t.tags}" />
      <div class="info">
        <p> likes </br>
         ${t.likes}</p>
        <p> views </br>
         ${t.views}</p>
        <p> comments </br>
        ${t.comments}</p>
        <p> downloads </br>
         ${t.downloads}</p>
      </div>
    </a>
  `).join(""),new c(".gallery-item").refresh()}const f=new c(".gallery a");document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector("#search-form"),o=document.querySelector("#gallery"),s=document.querySelector("#loader");a.addEventListener("submit",async t=>{t.preventDefault();const e=t.target.elements.searchQuery.value.trim();if(!e){i.error({message:"Please enter a search query!"});return}o.innerHTML="",s.classList.remove("hidden");try{const r=await l(e);r.hits.length===0?i.warning({message:"Sorry, no images found. Try again!"}):(d(r.hits),f.refresh())}catch{i.error({message:"Error fetching images. Please try again later."})}finally{s.classList.add("hidden")}})});
//# sourceMappingURL=index.js.map
