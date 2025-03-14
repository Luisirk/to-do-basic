import { JSX, useState } from "react"
import {Todos} from './components/Todos'
import './App.css'
import { FilterValue, type TodoId, type Todo as TodoType } from "./types" 
import { TODO_FILTERS } from "./const"
import { Footer } from "./components/Footer"
const mockTodo = [
  {
    id: '1',
    title: 'pintar warhammer',
    completed: false,
  },
  {
    id: '2',
    title: 'Darle un beso a Ester',
    completed: false,
  },
  {
    id: '3',
    title: 'Darle un abrazo a Ester',
    completed: true,
  }
]


const App= ():JSX.Element=> {
  const [todos, setTodos] = useState(mockTodo)
  const [filterSelected, setFilterSelected]= useState(TODO_FILTERS.ALL) //trae el filtorSelected y una forma de cambiar el filterSelected

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
  
  const handleFilterChange = (filter:FilterValue):void => {
    setFilterSelected(filter  )
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  

  return (
    
    <div className="todoapp">    
      <Todos 
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo = {handleRemove}
        todos={todos}
        
      />  
      <Footer
        activeCount={activeCount}
        filterSelected={filterSelected}
        completedCount={completedCount}
        onClearCompleted={()=>{}}
        handleFilterChange={handleFilterChange}
        />    
    </div>
  )
 
  
}

export default App
