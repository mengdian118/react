import React, { Component } from 'react'
import {CounterConsumer} from '../../store'
export default class CountBtn extends Component {
    render() {
        return (
            <CounterConsumer>
                {
                    ({OnIncrementCount,OndecrementCount}) => {
                        const handler = this.props.type === 'increment' ? OnIncrementCount: OndecrementCount
                        return <button onClick={handler}>{this.props.children}</button>
                    }
                }
            </CounterConsumer>
            // <button>{this.props.children}</button>
        )
    }
}