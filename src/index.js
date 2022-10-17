import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { global, reset } from './styles/global';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={reset} />
      <Global styles={global} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


