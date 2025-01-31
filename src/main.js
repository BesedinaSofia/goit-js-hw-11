
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const lightbox = new SimpleLightbox('.gallery a');

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#search-form');
    const gallery = document.querySelector('#gallery');
    const loader = document.querySelector('#loader');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const query = event.target.elements.searchQuery.value.trim();
        if (!query) {
            iziToast.error({ message: 'Please enter a search query!' });
            return;
        }

        
        gallery.innerHTML = '';

        
        loader.classList.remove('hidden');

        try {
            const data = await fetchImages(query);
            
            if (data.hits.length === 0) {
                iziToast.warning({ message: 'Sorry, no images found. Try again!' });
            } else {
                renderGallery(data.hits);
                lightbox.refresh(); 
            }
        } catch (error) {
            iziToast.error({ message: 'Error fetching images. Please try again later.' });
        } finally {
            
            loader.classList.add('hidden');
        }
    });
});
