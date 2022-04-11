import React from 'react';
import { render } from 'react-dom';
import App from './App';
import CryptoContext from './context/CryptoContext';
render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById('root')
);
