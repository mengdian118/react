import React, { Component, Fragment } from 'react'
import { TodoHeader, TodoInput, TodoList, Like, Count, ContextCount,HocComponent } from './components'
import { getTodo } from './services'
export default class App extends Component {

    constructor() {
        super()
        this.state = {
            title: "待办事项",
            desc: '不蹉跎岁月',
            article: '<div>阿桑大事大，<i>asdasd</i></div>',
            todoLists: [],
            isLoading: false


        }
    }
    addTodo = (todoTitle) => {
        // console.log(todoTitle)
        const currentLength = this.state.todoLists.length
        // this.setState({
        //     todoLists: this.state.todoLists.concat({
        //         id: currentLength + 1,
        //         title: todoTitle,
        //         completed: false
        //     })
        // })

        //数据拷贝方式：[].slice()或则 [...array]
        // let newTodos = this.state.todoLists.slice();
        const newTodos = [...this.state.todoLists]
        newTodos.push({
            id: currentLength + 1,
            title: todoTitle,
            completed: false
        })
        this.setState({
            todoLists: newTodos
        })
    }
    onComplateChange = (id) => {
        this.setState((prev) => {
            // console.log(prev)
            return {
                todoLists: prev.todoLists.map(item => {
                    if (item.id === id) {
                        item.completed = !item.completed
                    }
                    return item
                })
            }
        })
    }
    getData = () => {
        this.setState({
            isLoading: true
        })
        getTodo()
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    this.setState({
                        todoLists: res.data
                    })

                } else {
                    //错误处理
                }
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            })
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <Fragment>
                {/* { <div dangerouslySetInnerHTML={{__html:this.state.article}} /> } */}
                <Count />
                <ContextCount />
                <HocComponent />
                <TodoHeader desc={this.state.desc} />
                <TodoInput
                    btnText="Add"
                    addTodo={this.addTodo}
                />
                {
                    this.state.isLoading
                        ?
                        <div>Loading......</div>
                        :
                        <TodoList
                            todoLists={this.state.todoLists}
                            onComplateChange={this.onComplateChange}
                        />
                }
                <Like />
            </Fragment>
        )
    }
}
