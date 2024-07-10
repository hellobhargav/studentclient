import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
    const { _id } = useParams();
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("")
    const [email, setemail] = useState("")
    const [course, setcourse] = useState("")
    const [status, setstatus] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://studentserver-7ydw.onrender.com/student/${_id}`)
            .then(res => {
                setName(res.data.name)
                setMobile(res.data.mobile)
                setcourse(res.data.course)
                setemail(res.data.email)
                setstatus(res.data.status)
            })
            .catch((err) => console.log(err))
    }, [])
    const updateStudent = (e) => {
        e.preventDefault();
        axios.put(`https://studentserver-7ydw.onrender.com/student/${_id}`, { _id, name, mobile, course, email, status })
            .then(() => {
                alert("Student Updated Successfully")
                navigate("/")
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className=' container p-5'>
            <div className='col-8 col-lg-6 shadow p-5 mx-auto'>
                <h1 className='mb-3'>Edit Student</h1>

                <form onSubmit={updateStudent}>
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

export default EditStudent