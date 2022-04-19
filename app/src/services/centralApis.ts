import axios from 'axios';

export const cardsApi = axios.create({
  baseURL: 'http://localhost:3333/cards'
});