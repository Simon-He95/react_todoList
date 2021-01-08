import {Component} from 'react'
import './index.css'
import Item from '../Item'

export default class List extends Component{
    render(){
        const {todos} = this.props
        return (
            <ul style={{marginTop:'12px'}} ref={(c)=>this.listDom=c}>
                {todos.map((item,index)=>{
                    return <Item key={item.id} {...item} checkHandler={this.props.checkHandler} delete={this.props.delete} />
                })}
            </ul>
        )
    }
}