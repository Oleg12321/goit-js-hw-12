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
myForm.addEventListener('submit', e => {
  e.preventDefault();
  let inputData = e.target.elements.search.value.trim();

  if (inputData === '') {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    loaderBtn.style.display = 'none';
    return;
  }
  galleryList.innerHTML = '';

  requestsData(inputData, page, 20)
    .then(data => {
      if (data.hits.length <= 0) {
        e.target.elements.search.value = '';
        loaderBtn.style.display = 'none';
        return;
      }
      galleryShow(data.hits, galleryList);
      e.target.elements.search.value = '';

      const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
      });
      lightbox.refresh();
      loaderBtn.style.display = 'block';
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
});

loaderBtn.addEventListener('click', async () => {
  loader.style.display = 'inline-block';
  try {
    const carts = await requestsData('', page, perPage);
    galleryShow(carts.hits, galleryList);
    page += 1;
    console.log(carts.totalHits);
    let totalPages = carts.totalHits / perPage;
    if (page > totalPages) {
      loaderBtn.style.display = 'none';
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      return;
    }
    const lightbox = new SimpleLightbox('.gallery a', {
      captionDelay: 250,
    });
    lightbox.refresh();
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
      const itemHeight = galleryItems[0].getBoundingClientRect().height;
      window.scrollBy({
        top: itemHeight * 2,
        behavior: 'smooth',
      });
    }
    loader.style.display = 'none';
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    () => {
      loader.style.display = 'none';
    };
  }
});
