import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'utils/interceptors';
import store from "./store";

import './index.sass';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
