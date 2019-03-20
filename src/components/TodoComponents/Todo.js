import React from "react"

const Todo = (props) => {

    return (<p>{props.todo.task}</p>)
//epected to get an object todo and a key task
}

export default Todo;
//this component is on it's own nothing referenced besides the "task" key 