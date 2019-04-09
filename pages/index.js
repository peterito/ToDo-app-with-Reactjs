import Head from 'next/head'
import React, { Component } from 'react';
class App extends Component {
    constructor(){
      super();
      this.state = {
        message: 'WELCOME TO MY TODO APP',
        inputText:'',
        todos: [{
          name: 'Start ',
          done: false
        }]
      };
    }
    componentDidMount(){
      fetch('/todos')
      .then(res => res.json())
      .then(todos => this.setState({todos}));
    }
    formSubmitted(event){
      event.preventDefault();
  
      const todos = this.state.todos.slice();
      todos.push({
        name: this.state.inputText,
        done: false
      })
  
      this.setState({
        inputText:'',
        todos
      });

    }
    inputTextChanged(event){
      this.setState({
        inputText: event.target.value
      });
    }
  
    toggleTodoDone(event, index){
      const todos = [...this.state.todos] 
      todos[index]= {...todos[index]};  
      todos[index].done = event.target.checked; 
      this.setState({
        todos 
      });
    }
  
    deleteTodo(index){
      const todos = [...this.state.todos]
      todos.splice(index, 1)
  
      this.setState({
        todos
      })
    }
  
    Donetasks(){
      const todos = this.state.todos.map(todo => {
        return{
          name: todo.name,
          done: true
        }
      });
  
      this.setState({
        todos
      });
    }
  
    unDonetasks(){
      const todos = this.state.todos.map(todo => {
        return{
          name: todo.name,
          done: false
        }
      })
  
      this.setState({
        todos
      })
    }
    render() {
      return (
        <div className="App">
          <div className="head">
          <h1> {this.state.message}</h1>
          </div>
          <div className="content">
          <form onSubmit={(event) => this.formSubmitted(event)}>
            <label htmlFor="inputText">New Todo</label>
            <input onChange={(event) => this.inputTextChanged(event)} id="inputText" name="inputText" value={this.state.inputText} required/>
            <button type="submit">Add Todo</button>
          </form>
          
          
          <div className="alldone">
          <h2>Todo Lists</h2>
          <button onClick={() => this.Donetasks()}>Mark All</button> 
           &nbsp;
          <button onClick={() => this.unDonetasks()}>UnMark All</button>
          </div>
          <ul>
            {this.state.todos.map((todo, index) => {
              return (<li key={todo.name}>
                <input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox" checked={todo.done}/>
                <span className={todo.done ? 'done' : ''}>{todo.name}</span>
                <button onClick={() => this.deleteTodo(index)}>Remove</button>
                </li>)
            })}
          </ul>
          </div>
          <style jsx>{`
        body {
            margin-left: 5px;
            margin-right: 5px;
            back
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
              "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          .head{
            height: 5%;
            margin-top: 4px;
            margin-bottom: 10px;
            border: 1px solid;
            background-color: #222;
            text-align: center;
            color: #01b9ff;
          }
          
          .content{
            margin: 20px auto 20px auto;
            width: 500px;
            min-height: 580px;
            border: 5px solid #01b9ff;
            padding: 20px; 
          }
          
          .content label{
            font-size: 20px;
            margin: 20px auto 20px auto;
          }
          .content button{
            background-color: rgb(57, 102, 59); /* Green */
            color: white;
            padding: 10px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
          }
          
          .content form button{
            margin-top:20px;
          }
          .alldone{
            margin-top: 70px;
          }
          .alldone button{
            background-color: #91ccd9;
            padding: 5px 15px;
            margin: 25px;
            margin-left:0;
          }
          .alldone h2{
            text-align: center;
            font-size: 30px;
            text-transform: uppercase;
            text-decoration: underline;
          }
          .content form input{
            width: 50%;
            padding: 5px;
            margin-left: 5px;
            margin-right: 10px;
            line-height: 17px;
            font-size: 15px;
          }
          
          .content ul li{
            margin-top: 10px;
            border: 1px solid rgb(65, 3, 19);
            width: 90%;
            margin: 20px;
            font-size: 20px;
            list-style: none;
          }
          .content ul button{
            float: right;
            background-color: rgb(56, 15, 15);
            padding: 2px 10px;
          }
          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
              monospace;
          }
          
          input[type="checkbox"] {
            display:inline;
            width: auto;
          }
          
          .done{
            color: green;
          }
      `}</style>
        </div>
        
      );
    }
  }

export default App;