import{a as g,i as o,S as _}from"./assets/vendor-dc6c5a87.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();g.defaults.baseURL="https://pixabay.com/api/";const m=async(t,r,s)=>{try{const n=new URLSearchParams({key:"45097598-139b329fd073a7b3efd511e46",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:r}),e=await g.get(`?${n}`);if(e.data.totalHits===0)return o.error({message:"Sorry, there are no images matching your search query. Please try again!"}),{hits:[]};const a=Math.ceil(e.data.totalHits/s);return r>a?(o.info({message:"We're sorry, but you've reached the end of search results."}),{hits:[]}):e.data}catch(n){throw o.error({message:`Something went wrong. Please try again later. ${n.message}`}),n}},f=(t,r)=>{if(t.length<=0){r.innerHTML="";return}t.forEach(s=>{let n=`
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
    `;r.insertAdjacentHTML("beforeend",n)})},b=document.querySelector("#myForm"),h=document.querySelector(".gallery"),y=document.querySelector(".loader"),l=document.querySelector(".load-more");l.style.display="none";let i=1,d=15,c="";const p=new _(".gallery a",{captionDelay:250});b.addEventListener("submit",t=>{if(t.preventDefault(),c=t.target.elements.search.value.trim(),c===""){o.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.style.display="none";return}h.innerHTML="",i=1,m(c,i,d).then(r=>{if(r.hits.length<=0){t.target.elements.search.value="",l.style.display="none";return}f(r.hits,h),t.target.elements.search.value="",p.refresh(),l.style.display="block"}).catch(r=>{o.error({message:r})}).finally(()=>{y.style.display="none"})});l.addEventListener("click",async()=>{try{y.style.display="inline-block";const t=await m(c,i+1,d),r=Math.ceil(t.totalHits/d);if(t.hits.length>0){f(t.hits,h),p.refresh();const s=document.querySelectorAll(".gallery-item");if(s.length>0){const n=s[0].getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}i+=1}(i>=r||t.hits.length===0)&&(o.info({message:"We're sorry, but you've reached the end of search results."}),l.style.display="none")}catch(t){o.error({message:t})}finally{y.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
