import React, {useState, useRef} from 'react'
import TodoList from './Todolist'



function App() {
  
  const NewTodoRef = useRef()

  const [todos, setTodos] = useState([])



  function HandleNewToDo(e) {

    const name = NewTodoRef.current.value
    if (name === '')
      return
    console.log(name)

    setTodos([...todos,  {todoID: todos.length - 1, todoName: name, completed:false }])

    //updateTodos((old) => [...old,  {todoID: old.length - 1, todoName: name, completed:false }])

    NewTodoRef.current.value = null
  }

  function HandleRemoveAllToDo(e) {
    if ([todos] !== [])
    setTodos([])
  }

 

  return (
    <div>
      <div>Online Custom CheckList</div>
      <TodoList todoTask={todos} updateTodos={setTodos}/> 
      <input ref={NewTodoRef} type='text'/>
      <button onClick={HandleNewToDo}>Add Todo</button>
      <button onClick={HandleRemoveAllToDo}>Remove All</button>
    </div>
    
  )
}

export default App;
