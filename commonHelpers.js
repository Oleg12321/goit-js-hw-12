import{a as u,i as l,S as h}from"./assets/vendor-dc6c5a87.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();u.defaults.baseURL="https://pixabay.com/api/";const d=async(r,s,t)=>{try{const a=new URLSearchParams({key:"45097598-139b329fd073a7b3efd511e46",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:s}),e=await u.get(`?${a}`);return e.data.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),e.data}catch(a){throw l.error({message:`Something went wrong. Please try again later. ${a.message}`}),a}},m=(r,s)=>{if(r.length<=0){s.innerHTML="";return}r.forEach(t=>{let a=`
        <li class="gallery-item">
            <a class="gallery-link" href=${t.largeImageURL}>
                <img
                class="gallery-image"
                src=${t.webformatURL}
                data-source=${t.largeImageURL}
                alt=${t.tags}
                title="${t.tags}"
                />
            </a>
            <ul class="content">
              <li class="content__data">
                <h3 class="content__title">Likes</h3>
                <span class="content__number">${t.likes}</span>
              </li>
              <li class="content__data">
                <h3 class="content__title">Views</h3>
                <span class="content__number">${t.views}</span>
              </li>
              <li class="content__data">
                <h3 class="content__title">Comments</h3>
                <span class="content__number">${t.comments}</span>
              </li>
              <li class="content__data">
                <h3 class="content__title">Downloads</h3>
                <span class="content__number">${t.downloads}</span>
              </li>
            </ul>
        </li>
    `;s.insertAdjacentHTML("beforeend",a)})},f=document.querySelector("#myForm"),p=document.querySelector(".gallery"),g=document.querySelector(".loader"),o=document.querySelector(".load-more");o.style.display="none";let i=1,y=15;f.addEventListener("submit",r=>{r.preventDefault();let s=r.target.elements.search.value.trim();if(s===""){l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),o.style.display="none";return}d(s,i,20).then(t=>{if(t.hits.length<=0){r.target.elements.search.value="",o.style.display="none";return}m(t.hits,p),r.target.elements.search.value="",new h(".gallery a",{captionDelay:250}).refresh(),o.style.display="block"}).catch(t=>{console.error(t),l.error({message:"Something went wrong. Please try again later."})}).finally(()=>{g.style.display="none"})});o.addEventListener("click",async()=>{g.style.display="inline-block";try{const r=await d("",i,y);m(r.hits,p),i+=1,console.log(r.totalHits);let s=r.totalHits/y;if(i>s){o.style.display="none",l.info({message:"We're sorry, but you've reached the end of search results."});return}new h(".gallery a",{captionDelay:250}).refresh();const a=document.querySelectorAll(".gallery-item");if(a.length>0){const e=a[0].getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}g.style.display="none"}catch(r){console.error(r),l.error({message:"Something went wrong. Please try again later."})}finally{}});
//# sourceMappingURL=commonHelpers.js.map
