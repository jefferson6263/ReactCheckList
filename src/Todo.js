import React from 'react'

export default function Todo( {todoTask}) {
    return (
        <div>
            <input type='checkbox' onChange={() => {console.log('checking')}}/>
            {todoTask.todoName}
        </div>
    )

}