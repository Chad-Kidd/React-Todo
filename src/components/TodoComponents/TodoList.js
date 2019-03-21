// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div> {props.todoList2.map(todoItem => {
           return <Todo todo={todoItem}/>
            //calling Todo component
            //on props gonna have a keyname todo and its gonna have a value of todoItem
        })}
        </div>
        // fed a prop called todoList2 gonna access it by doing props.todoList2 then map
    )
}

//for each Todo Item pass in a value


export default TodoList;