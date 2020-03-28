 import React from 'react';
 import ReactDom from 'react-dom';
 import App from './App'
//  import * as services from './services'

/**
 * 如果想要全局扩展React.Component的prototype，比如想把ajax全局挂载组件this上，就可以使用下面这种：
 * 1）引入所有ajax请求
 *  import * as services from './services'
 * 2）在prototype上挂载一个叫http的东西，然后就可以在组件内部通过this.http.function名 来执行
 */
//  React.Component.prototype.http = services

 ReactDom.render(
    <App />,
    document.querySelector('#root')

 )

