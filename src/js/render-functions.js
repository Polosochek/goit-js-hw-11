// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryContainer = document.querySelector('.gallery');
const loaderElement = document.querySelector('[data-loader]');

const lightbox = new SimpleLightbox('.gallery a');


export function createGallery(images) {
  const markup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${likes}</p>
          <p class="info-item"><b>Views</b> ${views}</p>
          <p class="info-item"><b>Comments</b> ${comments}</p>
          <p class="info-item"><b>Downloads</b> ${downloads}</p>
        </div>
      </li>
    `)
    .join('');
  
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}


export function clearGallery() {
  galleryContainer.innerHTML = '';
}


export function showLoader() {
  if (loaderElement) {
    loaderElement.classList.remove('hidden');
  }
}


export function hideLoader() {
  if (loaderElement) {
    loaderElement.classList.add('hidden');
  }
}
