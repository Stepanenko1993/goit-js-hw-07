import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

(function () {
    const gallery = galleryItems.map(({ preview, original, description }) => `
 <li class ="gallery__item">
  <a 
  class = "gallery__link"
  href="${original}">
  <img 
  class ="gallery__image"
  src="${preview}" 
  data-source="${original}
  alt="${description}"
  />
  </a>
</li>`).join('');
    list.insertAdjacentHTML('beforeend', gallery)
})()

list.addEventListener('click', onclick);

function onclick(evt) {


    const instance = basicLightbox.create(`
    
  

`)
instance.show()

    }


   
    

 



