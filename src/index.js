import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from 'routes';
import store from 'Store/Store';
import { Provider } from 'react-redux';



ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <Router />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


