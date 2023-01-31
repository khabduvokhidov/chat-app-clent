import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { InfoProvider } from './context/Context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <InfoProvider>
      <Routes>
        <Route path='*' element={<App />} />
      </Routes>
    </InfoProvider>
  </BrowserRouter> 
);

