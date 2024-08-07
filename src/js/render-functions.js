import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export const galleryShow = (data, galleryList) => {
  if (data.length <= 0) {
    galleryList.innerHTML = '';
    return;
  }
  data.forEach(item => {
    let galleryItem = `
        <li class="gallery-item">
            <a class="gallery-link" href=${item.largeImageURL}>
                <img
                class="gallery-image"
                src=${item.webformatURL}
                data-source=${item.largeImageURL}
                alt=${item.tags}
                title="${item.tags}"
                />
            </a>
            <ul class="content">
              <li class="content__data">
                <h3 class="content__title">Likes</h3>
                <span class="content__number">${item.likes}</span>
              </li>
              <li class="content__data">
                <h3 class="content__title">Views</h3>
                <span class="content__number">${item.views}</span>
              </li>
              <li class="content__data">
                <h3 class="content__title">Comments</h3>
                <span class="content__number">${item.comments}</span>
              </li>
              <li class="content__data">
                <h3 class="content__title">Downloads</h3>
                <span class="content__number">${item.downloads}</span>
              </li>
            </ul>
        </li>
    `;

    galleryList.insertAdjacentHTML('beforeend', galleryItem);
  });
};
