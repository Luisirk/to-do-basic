import { JSX, useState } from "react"
import {Todos} from './components/Todos'

const mockTodo = [
  {
    id: '1',
    title: 'todo 1',
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
    completed: false,
  }
]


const App= ():JSX.Element=> {
  const [todos] = useState(mockTodo)
  return (
    <>
    <Todos todos={todos}/>
    <h1>Probando</h1>
    </>
  )
   
  
}

export default App
