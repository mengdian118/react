import React from 'react'
import HeaderTitle from '../HeaderTitle'
import propTypes from 'prop-types'  //propTypes 首字母小写

export default function TodoHeader(props) {
    // console.log(props)
    const headerAlign = {
        display:'flex',alignItems:'center'
    }
    return (
        <div>
            <div style={headerAlign}>
                <HeaderTitle title="一、待办事项"/>
                <span>(因为下面展示数据太长，暂时放在了下面)</span>
            </div>
            <p>{props.desc}</p>
        </div>
    )
}

TodoHeader.propTypes = {
    desc: propTypes.string.isRequired,
    x: propTypes.number,
    y: propTypes.number
}
TodoHeader.defaultProps = {
    desc: '明天会更好'
}
