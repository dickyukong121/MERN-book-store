import axios from 'axios';
import {REACT_APP_SERVER_URL} from '../base';

const bookAPI = axios.create({
  baseURL: `${REACT_APP_SERVER_URL}/books`
});

const orderAPI = axios.create({
  baseURL: `${REACT_APP_SERVER_URL}/order`
});

const checkoutAPI = axios.create({
  baseURL: `${REACT_APP_SERVER_URL}/checkout`
});

const getBooks = skipNumber => bookAPI.get(`/${skipNumber}`);
const saveOrder = payload =>
  orderAPI.post(`/`, payload, {
    'Content-Type': 'application/json'
  });
const bookCheckout = payload =>
  checkoutAPI.post(`/create-checkout-session`, payload, {
    'Content-Type': 'application/json'
  });

const api = {
  getBooks,
  saveOrder,
  bookCheckout
};

export default api;
