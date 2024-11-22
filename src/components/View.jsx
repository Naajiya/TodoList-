import React, { useDebugValue, useEffect, useState } from 'react'
import TodoCards from './TodoCards'
import { Col, Row } from 'react-bootstrap'
import { getTodo } from '../services/allApi'



function View({addTodo}) {

  const [allTodo, setAllTodo]=useState([])
  const [deletTodo,setDeleteTodo]=useState('')

  useEffect(()=>{
    getTodos()
  },[addTodo,deletTodo])

  const getTodos =async()=>{
    try{
      const result = await getTodo()
      setAllTodo(result.data)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>

      <Row>
        {
          allTodo.length>0 ?

          allTodo?.map(tod=>(
            <Col lg={4} md={4} sm={12}>
            <TodoCards disTodo={tod} setDeleteTodo={setDeleteTodo}/>
          </Col>
          ))   :
          <div>No ToDos</div>
        }
       
      </Row>

    </>
  )
}

export default View