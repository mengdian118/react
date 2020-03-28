import React, { Component } from 'react'
import TodoItem from './TodoItem.js'
import propTypes from 'prop-types'
export default class TodoList extends Component {
    static propTypes = {
        todoLists: propTypes.arrayOf(propTypes.shape({
            id:propTypes.number.isRequired,
            title:propTypes.string.isRequired,
            completed:propTypes.bool.isRequired
        })).isRequired,
        onComplateChange:propTypes.func
    }
    render() {
        const {
            todoLists,
            onComplateChange
        } = this.props
        return (
            <ul>
                {
                    todoLists.map( item => {
                        return (
                            <TodoItem 
                                onComplateChange={onComplateChange}
                                key={item.id}
                                {...item}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}
