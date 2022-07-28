import React from 'react'
import '../Content/Content.css'
import Todo from '../Todo/Todo'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Content = () => {
    return (
        <>
            <div className='content'>
                <h1>Marketing Campaign</h1>
                <div className="content__container">
                    <Container>
                        <Row style={{ marginBottom: '30px' }}>
                            <Col><Link to="/addtodo">
                                <button className='content__addbutton'>Add Tasks</button>
                            </Link></Col>
                            <Col><p>Priority</p></Col>
                        </Row>
                        <Row>
                            <Todo />
                        </Row>
                    </Container>
                </div>
            </div>

        </>
    )
}

export default Content