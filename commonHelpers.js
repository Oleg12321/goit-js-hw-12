import{a as d,i,S as m}from"./assets/vendor-dc6c5a87.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const y of n.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&a(y)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();d.defaults.baseURL="https://pixabay.com/api/";const p=async(t,r,s)=>{try{const a=new URLSearchParams({key:"45097598-139b329fd073a7b3efd511e46",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:r}),e=await d.get(`?${a}`);return e.data.hits.length===0&&i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),e.data}catch(a){throw i.error({message:`Something went wrong. Please try again later. ${a.message}`}),a}},f=(t,r)=>{if(t.length<=0){r.innerHTML="";return}t.forEach(s=>{let a=`
        <li class="gallery-item">
            <a class="gallery-link" href=${s.largeImageURL}>
                <img
                class="gallery-image"
                src=${s.webformatURL}
                data-source=${s.largeImageURL}
                alt=${s.tags}
                title="${s.tags}"
                />
            </a>
            <ul class="content">
              <li class="content__data">
                <h3 class="content__title">Likes</h3>
                <span class="content__number">${s.likes}</span>
              </li>
              <li class="content__data">
                <h3 class="content__title">Views</h3>
                <span class="content__number">${s.views}</span>
              </li>
              <li class="content__data">
                <h3 class="content__title">Comments</h3>
                <span class="content__number">${s.comments}</span>
              </li>
              <li class="content__data">
                <h3 class="content__title">Downloads</h3>
                <span class="content__number">${s.downloads}</span>
              </li>
            </ul>
        </li>
    `;r.insertAdjacentHTML("beforeend",a)})},_=document.querySelector("#myForm"),h=document.querySelector(".gallery"),c=document.querySelector(".loader"),l=document.querySelector(".load-more");l.style.display="none";let o=1,u=15,g="";_.addEventListener("submit",t=>{if(t.preventDefault(),g=t.target.elements.search.value.trim(),g===""){i.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.style.display="none";return}h.innerHTML="",o=1,p(g,o,u).then(r=>{if(r.hits.length<=0){t.target.elements.search.value="",l.style.display="none";return}f(r.hits,h),t.target.elements.search.value="",new m(".gallery a",{captionDelay:250}).refresh(),l.style.display="block"}).catch(r=>{console.error(r),i.error({message:"Something went wrong. Please try again later."})}).finally(()=>{c.style.display="none"})});l.addEventListener("click",async()=>{c.style.display="inline-block",o+=1;try{const t=await p(g,o,u);f(t.hits,h);let r=Math.ceil(t.totalHits/u);if(o>r){l.style.display="none",i.info({message:"We're sorry, but you've reached the end of search results."});return}new m(".gallery a",{captionDelay:250}).refresh();const a=document.querySelectorAll(".gallery-item");if(a.length>0){const e=a[0].getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}c.style.display="none"}catch(t){console.error(t),o-=1,i.error({message:"Something went wrong. Please try again later."})}finally{c.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
