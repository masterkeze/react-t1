import React from 'react'
import ReactDOM from 'react-dom'

const name = 'duke'
const element = <h1>hello, {name} !</h1>;
// 参数只能读不能改，不能加
// element.props = 'test' // 会报错，效果等同于 Object.freeze()
ReactDOM.render(element, document.getElementById("root"));