import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentData from './Students/StudentData'
import AddStudent from './Students/AddStudent'
import NoPage from './NoPage/NoPage'
import EditStudent from './Students/EditStudent'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<StudentData/>}/>
        <Route path='/add' element={<AddStudent/>}/>
        <Route path='/edit/:_id' element={<EditStudent/>}/>
        <Route path='*' element={<NoPage/>}/>
    </Routes>
  )
}

export default Routing