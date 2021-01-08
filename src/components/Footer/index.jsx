import {Component} from 'react'
import './index.css'

export default class Footer extends Component{
    changeHandler = (e) => {
        this.props.checkAll(e.target.checked)
    }
    handleDeleteAll = () =>{
        this.props.deleteAll()
    }
    render(){
        let {done} = this.props
        let {all} = this.props
        console.log(this.props)
        return (
            <div className="footer-wrapper">
                <input onChange={this.changeHandler} style={{verticalAlign:'bottom',marginRight:'10px'}} type="checkbox"/>
                <span><span>已完成{done}</span> / 全部{all}</span>
                <button className="btn clearFix" onClick={this.handleDeleteAll}>清除已完成任务</button>
            </div>
        )
    }
}