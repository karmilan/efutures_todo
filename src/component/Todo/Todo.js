import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';

import React from 'react'
import { Col, Container, Row, Form, Badge } from 'react-bootstrap';
import '../Todo/Todo.css'
import {isComplete} from '../../features/todoSlice'

const Todo = () => {
    const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

    

    return (
        <div>
            
            {todos.map((data)=> (
                
                <Row>
                <Col style={{textDecoration: data.completed ? 'line-through': '', cursor:'pointer'}} onClick={()=>{
                dispatch(isComplete({id: data.id, completed: !data.completed}))
            }}>
                    <div className='Todo__task'>
                        <Form.Check type="checkbox"  checked={data.completed} onChange={()=>{
                dispatch(isComplete({id: data.id, completed: !data.completed}))
            }} />
                        <h3>{data.title}</h3>
                    </div>

                </Col>
                <Col>
                    {data.pri === 'High' && <Badge pill bg="primary">
                        {data.pri}
                    </Badge>}

                    {data.pri === 'Mid' && <Badge pill bg="warning">
                        {data.pri}
                    </Badge>}

                    
                    {data.pri === 'Low' && <Badge pill bg="danger">
                        {data.pri}
                    </Badge>}
                </Col>
            </Row>
            ))}
        </div>
    )
}

export default Todo