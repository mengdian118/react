import React, { Component } from 'react'
import BackHome from '../../components/BackHome'
export default class ArticleDetail extends Component {
    
    render() {
        console.log(this.props.match)
        return (
            <div>
                文章详情 {this.props.match.params.id}
                <BackHome />
            </div>
        )
    }
}
