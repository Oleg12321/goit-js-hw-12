import{a as m,i as o,S as f}from"./assets/vendor-dc6c5a87.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();m.defaults.baseURL="https://pixabay.com/api/";const h=async(a,r,t)=>{try{const n=new URLSearchParams({key:"45097598-139b329fd073a7b3efd511e46",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:t,page:r}),e=await m.get(`?${n}`);if(e.data.totalHits===0)return o.error({message:"Sorry, there are no images matching your search query. Please try again!"}),e.data;const s=Math.ceil(e.data.totalHits/t);return r>s?(o.info({message:"We're sorry, but you've reached the end of search results."}),{hits:[]}):e.data}catch(n){throw o.error({message:`Something went wrong. Please try again later. ${n.message}`}),n}},p=(a,r)=>{if(a.length<=0){r.innerHTML="";return}a.forEach(t=>{let n=`
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
    `;r.insertAdjacentHTML("beforeend",n)})},_=document.querySelector("#myForm"),g=document.querySelector(".gallery"),d=document.querySelector(".loader"),l=document.querySelector(".load-more");l.style.display="none";let i=1,y=150,c="";_.addEventListener("submit",a=>{if(a.preventDefault(),c=a.target.elements.search.value.trim(),c===""){o.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.style.display="none";return}g.innerHTML="",i=1,h(c,i,y).then(r=>{if(r.hits.length<=0){a.target.elements.search.value="",l.style.display="none";return}p(r.hits,g),a.target.elements.search.value="",new f(".gallery a",{captionDelay:250}).refresh(),l.style.display="block"}).catch(r=>{console.error(r),o.error({message:"Something went wrong. Please try again later."})}).finally(()=>{d.style.display="none"})});l.addEventListener("click",async()=>{try{const a=await h(c,1,y),r=Math.ceil(a.totalHits/y);if(i>=r){o.info({message:"We're sorry, but you've reached the end of search results."}),l.style.display="none";return}d.style.display="inline-block",i+=1;const t=await h(c,i,y);if(t.hits.length===0){o.info({message:"We're sorry, but you've reached the end of search results."}),l.style.display="none";return}p(t.hits,g),new f(".gallery a",{captionDelay:250}).refresh();const e=document.querySelectorAll(".gallery-item");if(e.length>0){const s=e[0].getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}catch(a){console.error(a),o.error({message:"Something went wrong. Please try again later."})}finally{d.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
