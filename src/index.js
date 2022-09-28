import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from "redux";

import './index.css';
import App from './components/App';
import movies from "./reducer/index";


const store = createStore(movies);

console.log("Store ",store);
/*console.log("BEFORE STATE :",store.getState());

 store.dispatch({ /*action Object
  type:"ADD_MOVIES",
  movie:["Dilwale","Brahmastra"]
})

console.log("After STATE :",store.getState());
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);



