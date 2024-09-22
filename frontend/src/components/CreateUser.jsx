import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateUser = () => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [status, setStatus] = useState('')
  const [priority, setPriority] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/createProject",
      {
        name,
        description: desc,
        status,
        priority,
      })
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="d-flex vh-100 bg-secondary bg-dark justify-content-center align-items-center">
      <div className="bg-white rounded p-3 w-75 w-md-50 w-lg-40 w-xl-30 responsive-container">
        <form onSubmit={submitHandler}>
          <h2 className='text-center mb-4'>Add Project</h2>
          <div className='mb-3'>
            <label htmlFor="">Project Name</label>
            <input type="text" placeholder='Enter Project Name' className='form-control' onChange={(e) => setName(e.target.value)} value={name}/>
          </div>

          <div className='mb-3'>
            <label htmlFor="">Description</label>
            <input type="text" placeholder='Description' className='form-control' onChange={(e) => setDesc(e.target.value)} value={desc}/>
          </div>

          <div className='mb-3'>
            <label htmlFor="status">Status</label>
            <select className='form-control' id="status" onChange={(e) => setStatus(e.target.value)} value={status}>
              <option value="" disabled>Select</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor="priority">Priority</label>
            <select className='form-control' id="priority"onChange={(e) => setPriority(e.target.value)} value={priority}>
              <option value="" disabled>Select</option>
              <option value="Least">Higher</option>
              <option value="Medium">Medium</option>
              <option value="Lower">Lower</option>
            </select>
          </div>
          <button className='btn btn-success w-100'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser