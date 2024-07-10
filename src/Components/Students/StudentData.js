import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const StudentData = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`https://studentserver-7ydw.onrender.com/student`)
      .then((res) => {
        // console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => console.log(err))
  }, [])
  const deleteStudent = (sid) => {
    axios.delete(`https://studentserver-7ydw.onrender.com/student/${sid}`)
      .then(() => alert("Student Deleted"))
      .catch((err) => console.log(err))
  }
  const searchHandler = (e) => {
    const search = e.target.value;
    axios.get(`https://studentserver-7ydw.onrender.com/search/${search}`)
      .then((res) => {
        setStudents(res.data)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className='container p-5'>
      <h1>StudentData</h1>
      <div className='col-6 col-lg-4 my-3'>
        <input type='search' placeholder='Search Here' onChange={searchHandler} className='form-control ' />
      </div>
      <table className=' table table-bordered'>
        <thead className=' table-dark'>
          <tr>

            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Course</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((stu, index) => {
              return (
                <tr key={index}>

                  <td>{stu.name}</td>
                  <td>{stu.mobile}</td>
                  <td>{stu.email}</td>
                  <td>{stu.course}</td>
                  <td>{stu.status}</td>
                  <td>
                    <NavLink to={`/edit/${stu._id}`}> <button className='btn btn-primary me-3'><i className="bi bi-pencil"></i></button></NavLink>
                    <button onClick={() => deleteStudent(stu._id)} className='btn btn-danger'><i className="bi bi-trash3"></i></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default StudentData