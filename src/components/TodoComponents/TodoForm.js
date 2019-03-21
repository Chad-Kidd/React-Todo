import React from 'react'

const TodoForm = (props) => {
return (
    <form onSubmit={props.funTime}>
        <input onChange={props.notFunTime}></input>
        <button type="sumbit">Add</button>
    </form>
 )
}

export default TodoForm;

//creats form input and add button