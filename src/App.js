import React, {useState, useRef} from 'react'
import TodoList from './Todolist'
import './App.css'




function App() {
  
  const NewTodoRef = useRef()
  const [todos, setTodos] = useState([])
  
 
    

  function HandleNewToDo(e) {
    const name = NewTodoRef.current.value
    if (name === '')
      return
    setTodos([...todos,  {todoID: todos.length - 1, todoName: name, completed:false }])
    //updateTodos((old) => [...old,  {todoID: old.length - 1, todoName: name, completed:false }])
    NewTodoRef.current.value = null
  }

  function HandleRemoveAllToDo(e) {
    if ([todos] !== [])
    setTodos([])
  }

 

  return (
    
    <div className='list'>
      
      <span className="font-link">
        <div>Online Checklist</div>
      </span>

      <TodoList todoTask={todos} updateTodos={setTodos}/> 

      <input ref={NewTodoRef} type='text'/>
      <button onClick={HandleNewToDo}>Add Todo</button>
      <button onClick={HandleRemoveAllToDo}>Remove All</button>
    </div>
    
  )
}

export default App;
