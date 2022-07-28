import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTodo} from '../../features/todoSlice'
import {useNavigate} from 'react-router-dom'

const AddTodo = () => {

  const [value, setValue] = useState(''); 
  const [prio, setPrio] = useState(''); 
	const dispatch = useDispatch();

  const navigate = useNavigate()

	const onSubmit = (e) => {
		e.preventDefault();
    dispatch(addTodo({
      title: value,
      pri: prio,
    }))
    setValue('')
    navigate('/content')
  }

  return (
    <div>
      <Form style={{margin:'6em'}} onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Task" value={value} onChange={(e) => setValue(e.target.value)} />
      </Form.Group>

      
      <Form.Select aria-label="Default select example" value={prio} onChange={(e)=> setPrio(e.target.value) } >
      <option>Select the Priority</option>
      <option value="High">High</option>
      <option value="Mid" >Mid</option>
      <option value="Low" >Low</option>
    </Form.Select>
      <Button variant="primary" type="submit" style={{marginTop:'2em'}}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddTodo