import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state ={
            text: ''
        }
    }
    createTodo(){
        if(!this.state.text) return;
        this.props.createTodo(this.state.text);
        this.setState({
            text: "" //once sent, set text to empty string
        })
    }
    handleChange(event) {
        this.setState({
            text: event.target.value
        })
    }
    handleKeyDown(event) {
        if(event.keyCode === 13) {  // when you press enter(13), run createTodo
            this.createTodo()
        }
    }
    render() {
        return (
            <div>
                <input 
                    onChange={event => this.handleChange(event)}
                    onKeyDown={event => this.handleKeyDown(event)}
                    value = {this.state.text} // set value in input
                /><button
                        //   onClick={() => this.props.createTodo(this.state.text)}
                            onClick={() => this.createTodo(this.state.text)}
                          >Add Todo</button>

            </div>
        )
    }
}
