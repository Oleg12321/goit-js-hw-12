import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { requestsData } from './js/pixabay-api.js';
import { galleryShow } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const myForm = document.querySelector('#myForm');
const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loaderBtn = document.querySelector('.load-more');
loaderBtn.style.display = 'none';

let page = 1;
let perPage = 15;
let currentSearchTerm = '';

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

myForm.addEventListener('submit', e => {
  e.preventDefault();
  currentSearchTerm = e.target.elements.search.value.trim();

  if (currentSearchTerm === '') {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    loaderBtn.style.display = 'none';
    return;
  }

  galleryList.innerHTML = '';
  page = 1;

  requestsData(currentSearchTerm, page, perPage)
    .then(data => {
      if (data.hits.length <= 0) {
        e.target.elements.search.value = '';
        loaderBtn.style.display = 'none';
        return;
      }
      galleryShow(data.hits, galleryList);
      e.target.elements.search.value = '';
      lightbox.refresh();
      loaderBtn.style.display = 'block';
    })
    .catch(error => {
      iziToast.error({
        message: error,
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
});

loaderBtn.addEventListener('click', async () => {
  try {
    loader.style.display = 'inline-block';

    const carts = await requestsData(currentSearchTerm, page + 1, perPage); // Завантажуємо дані наступної сторінки
    const totalPages = Math.ceil(carts.totalHits / perPage);

    if (carts.hits.length > 0) {
      galleryShow(carts.hits, galleryList);
      lightbox.refresh();

      const galleryItems = document.querySelectorAll('.gallery-item');
      if (galleryItems.length > 0) {
        const itemHeight = galleryItems[0].getBoundingClientRect().height;
        window.scrollBy({
          top: itemHeight * 2,
          behavior: 'smooth',
        });
      }

      page += 1; // Збільшуємо номер сторінки тільки після успішного завантаження
    }

    if (page >= totalPages || carts.hits.length === 0) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      loaderBtn.style.display = 'none';
    }
  } catch (error) {
    iziToast.error({
      message: error,
    });
  } finally {
    loader.style.display = 'none';
  }
});
