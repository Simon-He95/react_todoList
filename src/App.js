import { Component, createRef } from 'react'
import './App.css'
import Header from  './components/Header'
import List from './components/List'
import Footer from './components/Footer'

class App extends Component {
  constructor(...args){
    super(...args)
    this.Ref1 = createRef()
  }
  state = {
    todos:[
      {
        id:'001',name:'吃饭',done:true
      },
      {
        id:'002',name:'睡觉',done:false
      },
      {
        id:'003',name:'洗澡',done:true
      }
    ]
  }
  addTodo = (data) => {
    const {todos} = this.state
    let newData = {
      id:'00'+(todos.length+1),
      name:data,
      done:false
    }
    this.setState({todos:[newData,...todos]})
  }
  checkHandler = (data)=>{
    const {todos} = this.state
    let newTodo = todos.map((item,index)=>{
      if(item.id===data.id){
        item.done = data.done
      }
      return item
    })
    this.setState({todos:newTodo})
  }
  checkAll = (all)=>{
    const {todos} = this.state
    let newTodo
    if(all) {
      newTodo =todos.map((item) => {
        item.done = true
        return item
      })
    }else {
       newTodo =todos.map((item) => {
        item.done = false
        return item
      })
    }
    this.setState({todos:newTodo})
  }
  delete = (id)=>{
    const {todos} = this.state
    if(window.confirm('是否要删除')){
      let newTodo = todos.filter(item=>item.id!==id)
      this.setState({todos:newTodo})      
    }
  }
  deleteAll = ()=>{
    const {todos} = this.state
    let newTodo =todos.filter(item=>!item.done)
    this.setState({todos:newTodo})
  }
  componentDidMount(){
    console.log(this.Ref1.current)
  }
  render() {
    const {todos} = this.state
    let i=0
    todos.map((item,index) => {
      if(item.done){
        i++
      }
      return true
    })
    return (
      <div ref={this.Ref1} className="todo-container">
        <Header addTodo={this.addTodo}/>
        <List todos={todos} checkHandler={this.checkHandler} delete={this.delete} />
        <Footer done={i} all={todos.length} checkAll={this.checkAll} deleteAll={this.deleteAll} />
      </div>
    )
  }
}

export default App