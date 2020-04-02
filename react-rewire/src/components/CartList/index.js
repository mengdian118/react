import React, { Component } from 'react'
import HeaderTitle from '../HeaderTitle'
import store from '../../store'
import {increment, decrement} from '../../actions/cart'
export default class CartList extends Component {
    constructor(){
        super()
        this.state = {
            cartList:[]
        }
    }
    getState = () => {
        this.setState({
            cartList: store.getState().cart
        })
    }
    componentDidMount(){
        this.getState()
        store.subscribe(this.getState)
    }
    render() {
        return (
            <div>
                <HeaderTitle title="二、redux实现的CartList"/>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>商品名称</th>
                            <th>价格</th>
                            <th>数量</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cartList.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{item.amount}</td>
                                    <td>
                                        <div>
                                            <button onClick={
                                                () => {
                                                    store.dispatch(decrement(item.id))
                                                }
                                            }>-</button>
                                            <span>{item.amount}</span>
                                            <button onClick={
                                                () => {
                                                    store.dispatch(increment(item.id))
                                                }
                                            }>+</button>
                                        </div>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
