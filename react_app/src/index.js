import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*-- 追記 --*/
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// ストア内のステートの値
let state_value = {
  counter:0,
  message:'COUNTER'
}

// ストア内のレデューサー(ステートの値を更新する関数)
function counter(state = state_value, action){
  switch(action.type){
    case 'INCREMENT':
      return {
        counter:state.counter + 1,
        message:'INCREMENT'
      };
    case 'DECREMENT':
      return {
        counter:state.counter - 1,
        message:'DECREMENT'
      };
    default:
      return state;
  }
}

// ストアを作成
let store = createStore(counter);


/*-- 追記(ここまで) --*/
// render内で<Provider store={store}>と</Provider>で<App />を挟む
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
