import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '39643681-3b933991cfb4e8a1d1c671a0b';

export const getImages = async (query = '', page = 1) => {
  const response = await axios.get(`?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
  return response.data;
}
