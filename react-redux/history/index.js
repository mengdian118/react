import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import store from './store'
//Provider react-redux提供的一个组件 
import { Provider } from 'react-redux'
ReactDom.render(
      < Provider store={store}>
         <App />
      </ Provider>,
   document.querySelector('#root')

)

