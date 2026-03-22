import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53429137-43b45d58ff46365b79c8d2911'; 

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => response.data);
}
