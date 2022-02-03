import React from 'react'
import Todo from './Todo'
import './App.css'

export default function TodoList( {todoTask, updateTodos}) {

    const todos = todoTask.map(todoTask => {
        return (<Todo key={todoTask.todoID} todoTask={todoTask} updateTodos={updateTodos}/>)
    })

    return (
        
        <div className='todolist'>
            {todos}
        </div>
    )


}