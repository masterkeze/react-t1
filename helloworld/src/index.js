import React from 'react'
import ReactDOM from 'react-dom'


// function Welcome(props){
// 只读，无法修改
//     return <h1>hello, {props.name}, your age is {props.age} !</h1>;
// }


class Welcome extends React.Component {
    render(){
        return <h1>hello, {this.props.name}, your age is {this.props.age} !</h1>;
    }
}

// Number 类型必须用 {} 包裹 不然会变成string
const element = <Welcome name="Luke" age={17}/>;
// 参数只能读不能改，不能加
// element.props = 'test' // 会报错，效果等同于 Object.freeze()
ReactDOM.render(element, document.getElementById("root"));

