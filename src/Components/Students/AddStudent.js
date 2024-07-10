import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("")
  const [email, setemail] = useState("")
  const [course, setcourse] = useState("")
  const [status, setstatus] = useState("")
  const navigate = useNavigate()
  const postStudent = (e) => {
    e.preventDefault();
    axios.post("https://studentserver-7ydw.onrender.com/student", { name, mobile, email, course, status })
      .then((res) => {
        alert("New Student Added Successfully...")
        console.log(res.data)
        setName("")
        setMobile("")
        setcourse("")
        setemail("")
        setstatus("")
        navigate("/")
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(name, email, mobile, course, status);
  }
  return (
    <div className=' container p-5'>
      <div className='col-8 col-lg-6 shadow p-5 mx-auto'>
        <h1 className='mb-3'>Add Student</h1>
        <form onSubmit={postStudent}>
          <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Student Name' className='form-control mb-3' />
          <input type='text' name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Mobile Number' className='form-control mb-3' />
          <input type='text' name='email' value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email Address' className='form-control mb-3' />
          <input type='text' name='course' value={course} onChange={(e) => setcourse(e.target.value)} placeholder='Course Name' className='form-control mb-3' />
          <input type='text' name='status' value={status} onChange={(e) => setstatus(e.target.value)} placeholder='Course Status' className='form-control mb-3' />
          <input type='submit' className='btn btn-outline-success w-100' />
        </form>
      </div>
    </div>
  )
}

export default AddStudent