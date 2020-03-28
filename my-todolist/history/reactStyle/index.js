 import React , {Component} from 'react';
 import ReactDom from 'react-dom';
 import ClassNames from 'classnames';
 import Styled from 'styled-components';
 import './index.css';
 
 //样式组件
 let StyledComponent = Styled.h1`
         color:blue;
 `
/**
 * React的样式添加的方式：
 * 1) style 行内；
 * 2）使用外链样式
 * 3）添加多种类名时, 借助第三方库--classnames
 * 4) 建立样式组件，借助第三方库--styled-components
 */
class App extends Component{
    render(){
      let style = {color:'red'}
      let classNames = ClassNames({
          'a':true,
          'b': false,
          'c': true
          })
       return (
          <div>
             <StyledComponent>元素的样式</StyledComponent>
             <ol>
                <li style={style}>使用行内样式</li>
                <li className="olLi">使用外链样式</li>
                <li className={classNames}>添加不同的class，使用的是第三方库classnames</li>
             </ol>
          </div>
       )
    }
}

 ReactDom.render(
    <App />,
    document.querySelector('#root')

 )
