import React from 'react'
import Content from './component/Content/Content'
import Header from './component/Header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddTodo from './component/AddTodo/AddTodo'
import Login from './component/Login/Login'

const App = () => {
  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route exact path='/addtodo' element={<AddTodo/>}/>
      <Route exact path='/content' element={<Content/>}/>
      <Route exact path='/' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    {/* <Content /> */}
    </>
  )
}

export default App