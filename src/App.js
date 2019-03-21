import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todoList = [
  {
    task: 'Oranges',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Potatoes',
    id: 1528817084358,
    completed: false
  }
];

let id = 0;

class App extends React.Component {
  //step one
constructor() {
  super();
  this.state = {

    todos: todoList,
    todoInput: ""

 };
}

//handler function for input
inputHandler = (event) => {
  this.setState({todoInput: event.target.value})
}

submitTodo = (event) => {
  event.preventDefault();
  let todosCopy = this.state.todos.slice()
  todosCopy.push({
    task: this.state.todoInput,
    id: ++id,
    completed: false
  })
  this.setState({todos: todosCopy, todoInput: " "})
}

render() {
  return (
    <div className="App-wrapper">
      <TodoList todoList2={this.state.todos} />
      {/* grabs TodoList component and it's map method and gives
    it a prop called todoList2 & a value of this.state.todos*/}
      <TodoForm funTime={this.submitTodo} notFunTime={this.inputHandler}
        input={this.state.todoInput} />
    </div>
    );
  }
}
export default App;
