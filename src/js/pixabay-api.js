
export async function fetchImages(query) {
    const API_KEY = '48567917-ad299c95fd5743fafa8b1579d';
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    try {
        const response = await fetch(`${BASE_URL}?${params}`);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        if (data.totalHits > 0) {
            
            data.hits.forEach(hit => {
                
            });
        } else {
            console.log('No hits');
        }
        return data;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}
