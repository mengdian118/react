//pureComponent : 功能和shouldComponentUpdate一样 禁止为变动的地方重新渲染

import React, { Component } from 'react'

const noop = () => { }
export default class TodoItem extends Component {
    handleChange = () => {
        // this.props.onComplateChange && this.props.onComplateChange(this.props.id)

        const {
            onComplateChange = noop
            , id
        } = this.props
        onComplateChange && onComplateChange(id)
    }

    shouldComponentUpdate(nextProps,nextState){
        //利用下一次状态和上一次状态去比较 当两者不同时 即可渲染
        return nextProps.completed !== this.props.completed
       
    }
    render() {
        // console.log(`TodoItem ${this.props.title} render`)
        const {
            completed,
            title
        } = this.props
        return (
            <li>
                <input
                    checked={completed}
                    onChange={this.handleChange}
                    type="checkbox" />
                <span>{title} {completed ? "已完成" : "未完成"}</span>
            </li>
        )
    }
}
