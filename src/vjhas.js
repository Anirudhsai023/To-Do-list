// import { ReactComponent } from '*.svg';
import React from 'react'

class App extends React.Component{
  constructor() {
    super()
    this.state = {value: '',
       task:[]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  handleInputChange(event){
    this.setState({value:event.target.value})
  }

  handleChange(){
    this.setState(
      prevState => {prevState.task.push(
        {
          'name':this.state.value,
          'done':false
        })}
    )
    this.setState({value:''})
    console.log(this.state.task)
  }

  deleteTask(val){

    this.setState(
      prevState => {prevState.task.map(taskElement => {if(taskElement.name === val){taskElement.done = true}})}
    )
  }


    render(){
    const taskList = this.state.task.map((tasks,id) => {
      if(tasks.done === false){
        return(<div key ={id}>
          <p>{tasks.name}</p>
          <button  onClick={() => this.deleteTask(tasks.name)}>X</button>
        </div>
        )
      }
    })
    return(<div style = {{textAlign:'center'}}>
       <h1>To-Do List</h1>
      <input type = "text" value={this.state.value} onChange={this.handleInputChange}/>
      <br/>
      <button onClick = {this.handleChange}>Click me</button>
      {taskList}
    </div>
    )
  }  
}
export default App;
