import React, { Component } from 'react';
class App extends Component {
    constructor(){
      super();
      this.state = {
        message: 'WELCOME TO MY TODO APP',
        inputText:'',
        todoList: [{
          name: 'Start ',
          done: false
        }]
      };
    }
    formSubmitted(event){
      event.preventDefault();
  
      const todoList = this.state.todoList.slice();
      todoList.push({
        name: this.state.inputText,
        done: false
      })
  
      this.setState({
        inputText:'',
        todoList
      });

    }
    inputTextChanged(event){
      this.setState({
        inputText: event.target.value
      });
    }
  
    toggleTodoDone(event, index){
      const todoList = [...this.state.todoList] 
      todoList[index]= {...todoList[index]};  
      todoList[index].done = event.target.checked; 
      this.setState({
        todoList 
      });
    }
  
    deleteTodo(index){
      const todoList = [...this.state.todoList]
      todoList.splice(index, 1)
  
      this.setState({
        todoList
      })
    }
  
    Donetasks(){
      const todoList = this.state.todoList.map(todo => {
        return{
          name: todo.name,
          done: true
        }
      });
  
      this.setState({
        todoList
      });
    }
  
    unDonetasks(){
      const todoList = this.state.todoList.map(todo => {
        return{
          name: todo.name,
          done: false
        }
      })
  
      this.setState({
        todoList
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
            {this.state.todoList.map((todo, index) => {
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
            width: 450px;
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
            width: 80%;
            padding: 5px;
            margin-left: 5px;
            margin-right: 10px;
            line-height: 17px;
            font-size: 15px;
          }
          
          .content ul li{
            margin-top: 2px;
            border: 1px solid rgb(65, 3, 19);
            width: 100%;
            font-size: 20px;
            list-style: none;
          }
          .content ul button{
            background-color: rgb(56, 15, 15);
            margin-top: 10px;
            padding: 2px 10px;
            margin-left: 250px;
            margin-bottom: 5px;
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