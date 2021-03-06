import { Container } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar'
import HomePage from './page/home-page';
import PaymentPage from './page/payment-page';
import ResultPage from './page/result-page';
function App() {
  return (
    <div>
      <Navbar />
      <Container maxW={'container.md'} pt={20}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Container>
    </div>
  );
}
export default App;
