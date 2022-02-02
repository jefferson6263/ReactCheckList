import React, {useState, useRef} from 'react'
import TodoList from './Todolist'



function App() {
  
  const NewTodoRef = useRef()

  const [todos, updateTodos] = useState([])

  function HandleNewToDo(e) {

    const name = NewTodoRef.current.value
    if (name === '')
      return
    console.log(name)
    updateTodos([...todos,  {todoID: todos.length - 1, todoName: name, completed:false }])
    NewTodoRef.current.value = null
  }


  function HandleRemoveAllToDo(e) {
    console.log('not implemented yet')
    
  }


  return (
    <>
      
      <div>Online Custom CheckList</div>
      <TodoList todoTask={todos}/>
      <input ref={NewTodoRef} type='text'/>
      <button onClick={HandleNewToDo}>Add Todo</button>
      <button onClick={HandleRemoveAllToDo}>Remove All</button>
      
    </>
    
  )
}

export default App;
