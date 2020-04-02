import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import ArticleDetail from './ArticleDetail'

/**
 * 参数传递：
 * 1） query
 * 2)  动态传参：  /path/:param => params
 * 3)  使用state 隐式传参
 * 
 */

export default class Article extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li><Link to="/article/1?from=article">文章1</Link></li>
                    <li><Link to={{
                        pathname: '/article/2',
                        state:{
                            from: 'article'
                        }
                    }}>文章2</Link></li>
                    <div>
                        {/* <Route component={ArticleDetail} path="/article/:id" /> */}
                    </div>
                </ol>
            </div>
        )
    }
}
