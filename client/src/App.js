import React  from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './page/home-page/home-page';
import PaymentPage from './page/payment-page/payment-page';
import ResultPage from './page/result-page/result-page';

function App() {
  return (
    <div className='sss'>
      <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/result' element={<ResultPage />} />
        </Routes>


    </div>
  );
}

export default App;
