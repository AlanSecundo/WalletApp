import axios from 'axios';
import Config from '../config/apiConfig';

const apiService = axios.create({
  baseURL: Config.baseURL,
});

export default apiService;
