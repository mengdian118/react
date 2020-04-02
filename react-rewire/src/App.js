import React, { Component, Fragment } from 'react'
import { HocComponent,CartList } from './components'
export default class App extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <Fragment>
                <HocComponent />
                <CartList />
            </Fragment>
        )
    }
}
