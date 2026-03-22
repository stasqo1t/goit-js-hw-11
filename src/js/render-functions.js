import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
          <li class="gallery-item">
            <a href="${largeImageURL}">
              <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <ul class="info">
              <li>
                <b>Likes</b>
                <span>${likes}</span>
              </li>
              <li>
                <b>Views</b>
                <span>${views}</span>
              </li>
              <li>
                <b>Comments</b>
                <span>${comments}</span>
              </li>
              <li>
                <b>Downloads</b>
                <span>${downloads}</span>
              </li>
            </ul>
          </li>`;
      }
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.textContent = 'Loading images, please wait...';
  loaderEl.classList.add('visible');
}

export function hideLoader() {
  loaderEl.classList.remove('visible');
  loaderEl.textContent = '';
}
