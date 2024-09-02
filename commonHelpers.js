import{a as m,i as o,S as _}from"./assets/vendor-dc6c5a87.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const y of a.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&n(y)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();m.defaults.baseURL="https://pixabay.com/api/";const h=async(r,s,t)=>{try{const n=new URLSearchParams({key:"45097598-139b329fd073a7b3efd511e46",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:s}),e=await m.get(`?${n}`);if(e.data.totalHits===0)return o.error({message:"Sorry, there are no images matching your search query. Please try again!"}),e.data;const a=Math.ceil(e.data.totalHits/t);return s>a?(o.info({message:"We're sorry, but you've reached the end of search results."}),{hits:[]}):e.data}catch(n){throw o.error({message:`Something went wrong. Please try again later. ${n.message}`}),n}},f=(r,s)=>{if(r.length<=0){s.innerHTML="";return}r.forEach(t=>{let n=`
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
    `;s.insertAdjacentHTML("beforeend",n)})},b=document.querySelector("#myForm"),d=document.querySelector(".gallery"),g=document.querySelector(".loader"),l=document.querySelector(".load-more");l.style.display="none";let i=1,u=15,c="";const p=new _(".gallery a",{captionDelay:250});b.addEventListener("submit",r=>{if(r.preventDefault(),c=r.target.elements.search.value.trim(),c===""){o.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.style.display="none";return}d.innerHTML="",i=1,h(c,i,u).then(s=>{if(s.hits.length<=0){r.target.elements.search.value="",l.style.display="none";return}f(s.hits,d),r.target.elements.search.value="",p.refresh(),l.style.display="block"}).catch(s=>{o.error({message:s})}).finally(()=>{g.style.display="none"})});l.addEventListener("click",async()=>{try{const r=await h(c,1,u),s=Math.ceil(r.totalHits/u);if(i>=s){o.info({message:"We're sorry, but you've reached the end of search results."}),l.style.display="none";return}g.style.display="inline-block",i+=1;const t=await h(c,i,u);if(t.hits.length===0){o.info({message:"We're sorry, but you've reached the end of search results."}),l.style.display="none";return}f(t.hits,d),p.refresh();const n=document.querySelectorAll(".gallery-item");if(n.length>0){const e=n[0].getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}catch(r){o.error({message:r})}finally{g.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
