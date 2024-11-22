import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideo } from '../services/allApi';


function Addtodo({setAddTodo}) {

  const [show, setShow] = useState(false);
  const [todo,setToDo]= useState({comment:''})
  // console.log(todo)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit=async()=>{
    const {comment}= todo
    if(comment){
      try{
         const res=await addVideo(todo)
         setAddTodo(res.data)
         console.log(res)
         handleClose()
      }catch(err){
        console.log(err)
        console.log('ererr')
      }
    }
  }


  return (
    <>
    <div className='container-fluid'>
        <div className=' row'>
            <div className='d-flex col align-items-center justify-content-center bg-dark text-light p-3'>
                <button  onClick={handleShow} className='btn btn-light m-2'><i class="fa-solid fa-notes-medical"></i></button>
                <h2>Add ToDo</h2>
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingTextarea2" label="ToDo">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          onChange={(e)=>setToDo({...todo, comment : e.target.value})}
        />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  )
}

export default Addtodo