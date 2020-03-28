import React, { Component } from 'react'
import CountBtn from './CountBtn.js'
import Counter from './Counter.js'
import HeaderTitle from '../HeaderTitle'
import {CounterProvider,CounterConsumer} from '../../store'
export default class ContextCount extends Component {
    render() {
        return (
            <CounterProvider>
                <HeaderTitle title="三、Context案例："/>
                <CounterConsumer>
                    {
                        ({title}) => {
                            return (
                                <div>
                                    <p>{title}</p>
                                </div>
                            )
                        }
                    }
                </CounterConsumer>
                <CountBtn type="decrement">-</CountBtn>
                <Counter />
                <CountBtn type="increment">+</CountBtn>
            </CounterProvider>
        )
    }
}

