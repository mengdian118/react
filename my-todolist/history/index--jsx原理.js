 import React , {Component} from 'react';
 import ReactDom from 'react-dom';

 // 组件嵌套
//  let Header = () => <h1>函数组件嵌套</h1>

//  class Content extends Component{
//     render(){
//        return (
//           <p>类组件嵌套</p>
//        )
//     }
//  }

// class App extends Component{
//     render(){
//       console.log(this)
//        return (
//           <div>
//              <Header />
//              <Content />
//           </div>
//        )
//     }
// }

/**
 *  @param {string} tag :标签名
 *  @param {Object} attrs :属性名
 *  @param {array} children : 子元素
 *  jsx 创建标签 需要用到 React.createElement(tag,attrs,...children)
 */

class App extends Component{
    render(){
      console.log(this)
       return (
          React.createElement(
             'div',
             {className:'app',id:'appRoot'},
             React.createElement(
                'h1',
                {className:'title'},
                'JSX 原理'
             ),
             React.createElement(
                'p',
                null,
                'JSX React!!!'
             )
          )
       )
    }
}

// JSX原理
// let appDom = {
//   tag: 'div',
//   attrs: {
//    className: 'app',
//    id: 'appRoot'
//   },
//   children:[
//      {
//         tag: 'h1',
//         attrs: {
//            className: 'title'
//         },
//         children: ['JSX原理']

//      },
//      {
//         tag: 'p',
//         attrs: null,
//         children: ['JSX React!!!']

//      }
//   ]
// }


 ReactDom.render(
    <App />,
    document.querySelector('#root')

 )
