import React from 'react'
import Todo from './Todo'

export default function TodoList( {todoTask, updateTodos}) {
    return (
        todoTask.map(todoTask => {
            return (<Todo key={todoTask.todoID} todoTask={todoTask} updateTodos={updateTodos}/>)
        })
    )


}