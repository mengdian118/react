import React, { Component } from 'react'
import {CounterConsumer} from '../../store'
export default class Counter extends Component {
    render() {
        return (
                <CounterConsumer>
                        {
                            ({count}) => {
                            return ( <span>{count}</span>)
                                   
                            }
                        }
                </CounterConsumer>
        )
    }
}