import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createGlobalStyle } from 'styled-components';
import App from './components/App';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
