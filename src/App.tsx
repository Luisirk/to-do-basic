import { JSX, useState } from "react"
import {Todos} from './components/Todos'
import './App.css'
const mockTodo = [
  {
    id: '1',
    title: 'pintar warhammer',
    completed: true,
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false,
  },
  {
    id: '3',
    title: 'todo 3',
    completed: true,
  }
]


const App= ():JSX.Element=> {
  const [todos, setTodos] = useState(mockTodo)

  const handleRemove = (id: String)=>{
    const newTodos = todos.filter(todo => todo.id !== id )
    setTodos(newTodos)
  }
  
  return (
    
    <div className="todoapp">    
      <Todos 
      onRemoveTodo = {handleRemove}
      todos={todos}/>      
    </div>
  )
 
  
}

export default App
