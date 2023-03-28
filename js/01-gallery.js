import { galleryItems } from './gallery-items.js';
// Change code below this line
const instance = basicLightbox.create(`
    <h1>Not closable</h1>
    <p>It's not possible to close this lightbox with a click.</p>
`, {
    closable: false
})

instance.show()
console.log(galleryItems);
