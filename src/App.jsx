import { useState } from 'react'
import './App.css'
import Addtodo from './components/Addtodo'
import View from './components/View'

function App() {
  const [addTodo,setAddTodo]=useState('')


  return (
    <>
     <Addtodo setAddTodo={setAddTodo}/>
     <View addTodo={addTodo}/>
    </>
  )
}

export default App
