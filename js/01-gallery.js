import { galleryItems } from './gallery-items.js';

const containerGallery = document.querySelector('.gallery');
const itemsMarkup = createGallery(galleryItems);
containerGallery.insertAdjacentHTML('beforeend', itemsMarkup);

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}
containerGallery.addEventListener('click', onclick);






const instance = basicLightbox.create(
    `
  <img width="1280" height="auto" src="">`,

  );
  
  function onclick(evt) {
    evt.preventDefault();
    const datasetSource = evt.target.dataset.source;
    if (!datasetSource) return;
    instance.element().querySelector('img').src = datasetSource;
    instance.show();
  }
  

