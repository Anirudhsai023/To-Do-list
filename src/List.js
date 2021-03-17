import React from 'react';
import './index.css'

class List extends React.Component {
    constructor() {
        super()
        this.state = {
            value: '',
            taskList: []
        }
        this.handleForm = this.handleForm.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleDelete(id) {
        const duplicateTakList = Object.assign([], this.state.taskList);
        duplicateTakList.splice(id, 1)
        this.setState({ taskList: duplicateTakList });

    }

    handleForm(event) {
        this.setState({ value: event.target.value })
    }

    handleChange() {
        this.setState(
            prevState => prevState.taskList.push({
                'timeStamp': Date.now(),
                'name': this.state.value,
                'done': false
            },
                prevState.value = '')
        )
    }

    render() {
        const taskItemList = this.state.taskList.map((tasks, id) => {
            if (tasks.done === false && tasks.name !== "")
                return (
                    <div key={tasks.timeStamp}>
                        <p>{tasks.name}</p>
                        <button onClick={() => this.handleDelete(id)}>Delete</button>
                    </div>
                )
        })
        return (
            <div>
                <input id="inputField" type='text' value={this.state.value} onChange={this.handleForm} placeholder="Have any tasks to do?"/>
                
                <button className="button" id="button" onClick={this.handleChange}>+</button>
                {taskItemList}
            </div>
        )
    }
}

export default List