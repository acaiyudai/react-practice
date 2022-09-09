import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*--追記 --*/
import { Provider } from 'react-redux';
import MemoStore from './memo/Store';
/*--追記(ここまで) --*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={MemoStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
