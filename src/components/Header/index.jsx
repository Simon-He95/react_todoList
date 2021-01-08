import { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
    // 对接收的props进行：类型、必要性的限制
    static propTyes = {
        addTodo: PropTypes.func.isRequired,
    }
    keyUp = (e) => {
        if (e.keyCode === 13 && e.target.value.trim() !== '') {
            this.props.addTodo(e.target.value)
            e.target.value = ''
        }
        return
    }
    render() {
        return (
            <div className="header">
                <input onKeyUp={this.keyUp} type="text" placeholder="请输入你的任务名称，按回车确认" />
            </div>
        )
    }
}