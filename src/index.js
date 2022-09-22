import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from "redux";

import './index.css';
import App from './components/App';
import movies from "./reducer/index";


const store = createStore(movies);

console.log("Store ",store);
console.log("STATE :",store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



