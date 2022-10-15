import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { global, reset } from './styles/global';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <App />
  </React.StrictMode>
);


