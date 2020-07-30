import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { createGlobalStyle } from 'styled-components';
import App from 'components/App';
import { store, persistor } from 'util/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
