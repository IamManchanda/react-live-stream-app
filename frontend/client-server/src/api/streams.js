import axios from 'axios';

const streamsApi = axios.create({
  baseURL: 'http://localhost:3005',
});

export default streamsApi;
