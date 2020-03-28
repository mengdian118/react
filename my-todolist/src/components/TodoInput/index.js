
// react 里面通过ref来获取组件或者dom元素，要使用ref之前，必须先引入React.createRef方法来创建一个ref
import React, { Component, createRef } from 'react'
import propTypes from 'prop-types'

export default class TodoInput extends Component {
    static propTypes = {
        btnText: propTypes.string
    }
    static defaultProps = {
        btnText: '添加'
    }
    constructor() {
        super()
        this.state = {
            inputValue: ''
        }
        this.inputDom = createRef()
    }

    //输入
    handleInput = (e) => {
        const currentIput = e.currentTarget.value.replace(/\s+/g, '')
        this.setState({
            inputValue: currentIput
        })
    }
    //回车
    inputKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleAddBtn()
        }

    }
    //添加
    handleAddBtn = () => {
        if (this.state.inputValue === '') {
            return false;
        }
        this.props.addTodo(this.state.inputValue)
        this.setState({
            inputValue: ''
        }, () => { this.inputDom.current.focus() })


    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputValue}
                    placeholder="请输入您的计划"
                    onChange={this.handleInput}
                    onKeyUp={this.inputKeyUp}
                    ref={this.inputDom}
                /><button onClick={this.handleAddBtn}>{this.props.btnText}</button>
            </div>
        )
    }
}
