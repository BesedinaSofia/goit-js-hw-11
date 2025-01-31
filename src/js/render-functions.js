
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'; 

export function renderGallery(images) {
  const gallery = document.querySelector('#gallery');

  
  gallery.innerHTML = images.map(image => `
    <a href="${image.largeImageURL}" class="gallery-item" data-lightbox="gallery">
      <img src="${image.webformatURL}" alt="${image.tags}" />
      <div class="info">
        <p> likes </br>
         ${image.likes}</p>
        <p> views </br>
         ${image.views}</p>
        <p> comments </br>
        ${image.comments}</p>
        <p> downloads </br>
         ${image.downloads}</p>
      </div>
    </a>
  `).join('');

 
  const lightbox = new SimpleLightbox('.gallery-item');
  lightbox.refresh(); 
}
