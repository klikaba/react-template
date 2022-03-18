import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './styles/bootstrap.min.css';
import './styles/main.scss';

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app-root')
);
