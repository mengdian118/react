import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import store from './store'
// console.log(store)
// window.store = store
ReactDom.render(
   <App />,
   document.querySelector('#root')

)

