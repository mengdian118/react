import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import store from './store'
//Provider react-redux提供的一个组件 
import { Provider } from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'
ReactDom.render(
   < Provider store={store}>
      <Router>
         <Route component={App} />
      </Router>
   </ Provider>,
   document.querySelector('#root')

)

