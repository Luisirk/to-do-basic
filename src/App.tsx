import { JSX, useState } from "react"
import {Todos} from './components/Todos'
import './App.css'
import { type TodoId, type Todo as TodoType } from "./types"
const mockTodo = [
  {
    id: '1',
    title: 'pintar warhammer',
    completed: false,
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

  const handleRemove = ({id}:TodoId):void=>{
    const newTodos = todos.filter(todo => todo.id !== id )
    setTodos(newTodos)
  }
  const handleCompleted=(
    {id,completed}: Pick<TodoType, 'id'| 'completed'> 
      ):void => {
        const newTodos = todos.map(todo => {
          if (todo.id === id){
            return {
            ...todo,
            completed
            }
          }
          return todo
      })
    setTodos(newTodos)
  }
  
  return (
    
    <div className="todoapp">    
      <Todos 
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo = {handleRemove}
        todos={todos}
      />      
    </div>
  )
 
  
}

export default App
