import axios from 'axios';

const key = '16252810-97a93e8d6856e870fd6ba2eb3';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = ({ searchQuery = '', currentPage = 1, perPage = 12 }) => {
  return axios
    .get(
      `?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${currentPage}&per_page=${perPage}&key=${key}`,
    )
    .then(response => response.data.hits);
};

export default { fetchImages };
