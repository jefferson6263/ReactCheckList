import React from 'react'
import TodoList from './checklist';


function App() {
  return (
    <>
      
      <div>Online Custom CheckList</div>
      <TodoList/>
      <input type='text'/>
      <button>Add Todo</button>
      <button>Remove All</button>
    </>
    
  )
}

export default App;
