import React, { Component, Fragment } from 'react'
import { HocComponent,CartList, BlogList } from './components'
import {Home, Article, Users, ArticleDetail, NotFound} from './views'
import {Route, NavLink as Link, Redirect, Switch} from 'react-router-dom'
import HeaderTitle from './components/HeaderTitle'
export default class App extends Component {
    state = {
        isLogin: false
    }
    render() {
        // console.log(this.props)
        return (
            <Fragment>
                <HeaderTitle title="四、Router的应用"/>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/article">文章</Link></li>
                    <li><Link to="/users">用户</Link></li>
                </ul>
                <Switch>
                        <Route component={Home} path="/home" />
                        <Route component={Article} path="/article" exact />
                        <Route component={ArticleDetail} path="/article/:id" />
                        <Route path="/users" 
                            render = {
                                (routerProps) => {
                                        return this.state.isLogin ? <Users {...routerProps} /> : <div>请登录</div>
                                }
                            }
                        />
                        <Route component={NotFound} path="/404" />
                        <Redirect to="/home" from="/" exact />
                        <Redirect to="/404" />
                </Switch>
                <HocComponent />
                <CartList />
                <BlogList />
            </Fragment>
        )
    }
}
