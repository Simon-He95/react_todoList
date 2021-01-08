import {Component} from 'react'
import './index.css'

export default class Item extends Component{
    state={
        isShow:false
    }
    onMouseEnter = (e) =>{
        this.setState({isShow:true})
        e.target.style.background = 'lightslategray'
    }
    onMouseLeave = (e) =>{
        this.setState({isShow:false})
        e.target.style.background = 'white'
    }
    checkHandler = (e) => {
        const {id,name} = this.props
        this.props.checkHandler({
            id,
            name,
            done:e.target.checked
        })
    }
    handleDelete=()=>{
        const {id} = this.props
        this.props.delete(id)
    }
    render(){
        const {name,done} = this.props
        return (
            <li className="list-wrapper" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    <input className="checkbox" type="checkbox" checked={done} onChange={this.checkHandler} />&nbsp;
                    <span>{name}</span>
                    <button className="btn clearFix" onClick={this.handleDelete} style={{display:this.state.isShow?'block':'none'}}>删除</button>
            </li>
        )
    }
}