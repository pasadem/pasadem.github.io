import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Products from './pages/products';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateNewPoduct from './components/newProductForm.jsx'

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './slices/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
