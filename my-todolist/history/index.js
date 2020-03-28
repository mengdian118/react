 import React , {Component} from 'react';
 import ReactDom from 'react-dom';

// 1) 变量
//  let App = 
//      <h1>
//          welcome react1112
//      </h1>
// 2)函数
//  let createApp = (props) => {
//      return (
//             <div>
//                 {/*  这是注释 */}
//                 <h1>Welcome {props.title} </h1>
                
//             </div>
//      )
//  }

//  let app =createApp({
//     title:'React111'
//  })

// 3)函数组件

// let App = (props) => {
//       return (
//          <div>
//             <h1>函数 {props.title}</h1>
//          </div>
//       )
// }

// 4) 类组件

class App extends Component{
    render(){
      console.log(this)
       return (
          <div>
             <h1>类组件 {this.props.title}</h1>
          </div>
       )
    }
}
// 类组件的渲染原理 
// let app =new App({
//    title:'React!!!'
// }).render()

// 在React16之前 使用这种方式创建一个类组件
// React.CreateClass({
//    render(){
//       return <h1>类组件 react </h1>
//    }
// }) 

 ReactDom.render(
    <App title="React!!!"/>,
    document.querySelector('#root')

 )
