import React from 'react'
import Card from 'react-bootstrap/Card';
import { deletTodo } from '../services/allApi';


function TodoCards({disTodo,setDeleteTodo}) {
  console.log(disTodo)

  const handleRemove=async(todoId)=>{
    try{
      const res= await deletTodo(todoId)
      setDeleteTodo(res.data)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='container p-4 d-flex'>
      <Card className='d-flex p-2' style={{height:'200px', width:'250px'}}>
        <Card.Body>{disTodo.comment} </Card.Body>
        <i onClick={()=>handleRemove(disTodo.id)} class="fa-solid fa-circle-minus"></i>  
      </Card>
      
    </div>
    
  )
}

export default TodoCards