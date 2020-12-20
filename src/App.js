import React, { Component } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import List from './components/List'

export default class App extends Component {
  constructor(){
    super();
    let list = [
      {id: 0, text: 'learn React'},
      {id: 1, text: 'prepare lunch'},
      {id: 2, text: 'math exam'},
      {id: 3, text: 'go to gym'}
    ]
    this.state = {
      todos: list,
      startId: 4
    }
  }
  createTodo(text) {
    this.setState({
      todos: [...this.state.todos, {
        id: this.state.startId,
        text: text
      }],
      startId: this.state.startId +1
    })
  }
  removeTodo(id){
    this.setState({
        todos: this.state.todos.filter(todo => {
            return todo.id !== id;
        })
    })
}
  render() {
    return (
      <div>
        <Title
         todos={this.state.todos} // this points to Title component
        />
        <Form
         createTodo={text => this.createTodo(text)} // arrow function, this points to the function
        />
        <List
         todos={this.state.todos}
         removeTodo={id => this.removeTodo(id)}
        />
      </div>
    )
  }
}
