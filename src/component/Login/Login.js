import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Content from '../Content/Content';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const user = 'test'
    const pass = 'test'

    const [uname, setUname] = useState()
    const [pword, setPword] = useState()

    const navigate = useNavigate()

    const handleLogin = () => {
        if (uname === user && pword === pass) {
           navigate('/content')
        }
        else
        alert('Invalid Username or Password')
    }

  return (
    <div>
        <Form style={{margin:'6em 30em'}} onSubmit={handleLogin}>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="User Name" value={uname} onChange={(e)=>setUname(e.target.value)} required />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="password" placeholder="Password" value={pword} onChange={(e)=>setPword(e.target.value)} required />
      </Form.Group>

      <Button variant="primary" type="submit" style={{marginTop:'5px'}}>
        Login
      </Button>
    </Form>
    </div>
  )
}

export default Login