import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore,applyMiddleware} from "redux";

import './index.css';
import App from './components/App';
import rootReducer from "./reducer/index";

//function logger(obj,next,action);
//logger(obj)(next)(action);
/*
const logger = function({dispatch,getState}){
  return function(next){
    return function(action){
      //middleware code
      console.log("ACTION_TYPE = ",action.type);
      next(action);
    }
  }
}
*/

const logger = ({dispatch,getState}) => (next) => (action) =>{
  //middleware code
  console.log("ACTION_TYPE = ",action.type);
  next(action);
}


const store = createStore(rootReducer,applyMiddleware(logger));

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



