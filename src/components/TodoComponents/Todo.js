import React from "react";

const Todo = (props) => {
return(
<p>{props.todo.task}</p>)
}
    //get a prop and name it todo


export default Todo;
//this component is on it's own nothing referenced besides the "task" key 