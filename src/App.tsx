import { useState } from "react"

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


const App= ()=> {
  const [todos] = useState(mockTodo)
  return (
    <>
    <h1>Probando</h1>
    </>
  )
   
  
}

export default App
