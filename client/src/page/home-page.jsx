import React, { useCallback, useEffect, useState } from 'react';
import api from '../api/api';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Book from '../component/book';

function HomePage() {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [skipNumber, setSkipNumber] = useState(0);


  useEffect(() => {
    caches.delete('Book');
    caches.delete('Order');
    getBooks();
  }, []);

  const fetchMoreData = () => {
    if (items.length >= 200) {
      setHasMore(false);
      return;
    }
    //use setTimeout to simulate 'loading' 
    setTimeout(() => {
      getBooks();
    }, 2000);
  };

  //get book by calling API
  async function getBooks() {
    const newData = await api.getBooks(skipNumber);
    setItems(items => [...items, ...newData.data.data]);
    setSkipNumber(skipNumber => skipNumber + 20);
  }

  //click event, useCallback to memorize function
  const clickBook = useCallback(async item => {
    const res = new Response(JSON.stringify(item));
    await caches.open('Book').then(cache => {
      cache.put('http://localhost:3000', res);
    });
    navigate('/payment');
  }, []);

  return (
    <div className="homepage">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Center h="100px">Loading...</Center>}
          endMessage={<Center h="100px">All books are shown.</Center>}
        >
          {items.map((item, index) => (
            <Book key={index} item={item} clickBook={clickBook} />
          ))}
        </InfiniteScroll>
    </div>
  );
}

export default HomePage;
