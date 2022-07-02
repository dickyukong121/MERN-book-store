import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import ButtonComponent from '../../component/button-component/button-component';
import ResultComponent from '../../component/result-component/result-component';
function ResultPage() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    name: '',
    category: '',
    price: ''
  });

  //return to homepage
  const handleToBookList = useCallback(() => {
    navigate('/');
  }, []);

  useEffect(() => {
    //Save order to mongo
    const saveOrder = async () => {
      const cacheStorage = await caches.open('Order');
      const cachedResponse = await cacheStorage.match('http://localhost:3000');
      if (cachedResponse) {
        let data = await cachedResponse.json();
        await api.saveOrder(data);
      }
    };

    //show the book info, and then delete all caches
    const deleteCacheData = async () => {
      const cacheStorage = await caches.open('Book');
      const cachedResponse = await cacheStorage.match('http://localhost:3000');
      if (cachedResponse) {
        let data = await cachedResponse.json();
        console.log(data);
        setBook(data);
      }
      caches.delete('Book');
      caches.delete('Order');
    };

    saveOrder();
    deleteCacheData();
  }, []);

  return (
    <div className="result-page">
      <ResultComponent book={book} />
      <ButtonComponent action={handleToBookList} />
    </div>
  );
}

export default ResultPage;
