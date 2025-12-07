import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
const btn = document.getElementsByTagName('button')[0];
const input = document.getElementsByName('search-text')[0];

btn.addEventListener('click', async function(event) {
  event.preventDefault(); 
  const query = input.value.trim();
  if (!query) return;
  
  clearGallery();
  showLoader();
  
  getImagesByQuery(query)
    .then(data => {
      hideLoader();
      
      if (data && data.hits.length > 0) {
        createGallery(data.hits);
      } else {
        iziToast.error({
          title: `Я не годен знайти "${query}", шукай щось інше !`,
          timeout: 4000
        });
      }
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Не вдалось завантажити зображення',
        message: error.message,
        timeout: 4000
      });
    });
});
