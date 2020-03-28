import React, { useState, useEffect } from 'react'
import HeaderTitle from '../HeaderTitle'
export default function Count() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // document.title = `当前数量为：${count}`
    })
    return (
        <div>
            <HeaderTitle title="二、React-Hooks:" />
            <p>当前的数量为：{count <= 0 ? 0 : count}</p>
            <button onClick={() => { setCount(count - 1) }}>-</button>
            <span>{count < 0 ? 0 : count}</span>
            <button onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    )
}
