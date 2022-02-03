import React from 'react'



export default function Todo( {todoTask, updateTodos}) {
    
    function removeTodo(e) {
        updateTodos((old) => old.filter((val) => val.todoID !== todoTask.todoID))
    }
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "5px",
        fontFamily: "Arial",
        margin: "5px"
    }

    return (
        <div>
            <input type='checkbox' onChange={() => {console.log('checking')}}/>
            {todoTask.todoName}
            <button style={mystyle} onClick={removeTodo}>Remove</button>
        </div>
    )

}