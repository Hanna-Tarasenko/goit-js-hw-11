import{i as u,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="46991464-598feb9117dc71abe61f88b6f",b="https://pixabay.com/api/";async function w(s){const o=`${b}?key=${g}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`,t=await fetch(o);if(!t.ok)throw new Error("Failed to fetch images");return(await t.json()).hits.map(({webformatURL:e,largeImageURL:r,tags:n,likes:f,comments:p,views:m,downloads:y})=>({webformatURL:e,largeImageURL:r,tags:n,likes:f,comments:p,views:m,downloads:y}))}function L(s){const o=document.querySelector(".image-gallery");o.innerHTML=s.map(t=>`
        <div class="image-item">
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" class="gallery-img" />
            </a>
            <div class="image-info">
                <h5 class ="text"> <span class="icon-data">💗 Likes: ${t.likes} </span></h5>
                <h5 class ="text"> <span class="icon-data">🗨️ Comments: ${t.comments}</span></h5>
                <h5 class ="text"><span class="icon-data">👀 Views: ${t.views}</span></h5>
                <h5 class ="text"><span class="icon-data">⬇️ Downloads: ${t.downloads}</span></h5>
            </div>
        </div>
    `).join("")}function c(s){u.error({title:"Error",message:s,position:"bottomCenter",color:"red"})}const i=document.querySelector(".search-form"),v=document.querySelector(".image-gallery"),l=document.querySelector(".loader");let d;i.addEventListener("submit",async s=>{var t;s.preventDefault();const o=(t=i.querySelector(".search-form-input"))==null?void 0:t.value.trim();if(!o){c("Please enter a valid search query");return}l.style.display="block";try{v.innerHTML="";const a=await w(o);a.length===0?u.show({title:"No results found",message:"Try a different search term",color:"red",position:"bottomCenter"}):(L(a),d=new h(".image-gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),d.refresh())}catch{c("An error occurred while fetching images. Please try again.")}finally{l.style.display="none"}i.reset()});
//# sourceMappingURL=index.js.map
