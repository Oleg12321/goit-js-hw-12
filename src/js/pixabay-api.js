import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const requestsData = async (inputData, page, perPage) => {
  try {
    const params = new URLSearchParams({
      key: '45097598-139b329fd073a7b3efd511e46',
      q: inputData,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: perPage,
      page: page,
    });

    const response = await axios.get(`?${params}`);

    if (response.data.totalHits === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return { hits: [] };
    }

    const totalPages = Math.ceil(response.data.totalHits / perPage);
    if (page > totalPages) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      return { hits: [] }; // Повертаємо порожній масив hits, щоб уникнути зайвих запитів
    }

    return response.data;
  } catch (error) {
    iziToast.error({
      message: `Something went wrong. Please try again later. ${error.message}`,
    });
    throw error;
  }
};
