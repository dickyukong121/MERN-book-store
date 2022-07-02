import axios from 'axios';

const bookAPI = axios.create({
  baseURL: 'http://localhost:4000/books'
});

const orderAPI = axios.create({
  baseURL: 'http://localhost:4000/order'
});

const checkoutAPI = axios.create({
  baseURL: 'http://localhost:4000/checkout'
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
