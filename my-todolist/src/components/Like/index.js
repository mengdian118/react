import React, { Component } from 'react'
import './index.scss'

export default class Like extends Component {
    constructor() {
        super()
        this.state = {
            isLiked: false
        }
    }
    handleLike = () => {
        /**
         * 在react中，要修改数据，就是用setState()方法，可以有两个参数
         * 一》第一个参数又有两种情况：
         * **1）是一个对象；
         * this.setState({isLiked: !this.state.isLiked})
         * 
         * **2）是一个方法
         */
        this.setState((prev) => {
            // console.log('内部状态' + this.state.isLiked)
            return { isLiked: !prev.isLiked }

        }, () => {
            //由于setState是异步的 所以在回调里面可以拿到最新的状态值
            // console.log(this.state.isLiked)
        })
        // console.log('外部状态' + this.state.isLiked)
    }
    render() {
        return (
            <div>
                <span onClick={this.handleLike} className="cilckLiked">
                    {
                        this.state.isLiked ? "超喜欢🧡" : "不喜欢🖤"
                    }
                </span>
            </div>
        )
    }
}
