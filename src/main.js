import './css/styles.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

    clearGallery();
    showLoader();
    
  getImagesByQuery(query)
    .then(data => {
      hideLoader();

      if (!data.hits || data.hits.length === 0) {
        iziToast.error({
          title: 'Eroor',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          maxWidth: 432,
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      hideLoader();

      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
        maxWidth: 432,
      });

      console.error(error);
    });
}
