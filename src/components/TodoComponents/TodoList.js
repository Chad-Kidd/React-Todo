// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from './Todo';

const TodoList = () => {
    return (
        <div>{props.todoList2.map(todoItem => {
         return    <Todo todo={todoItem}/>
            }
       )}</div>
    )
}
//for each Todo Item pass in a value


export default TodoList;