import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const UpdateUser = () => {
  const {id} = useParams()
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [status, setStatus] = useState('')
  const [priority, setPriority] = useState('')
  const navigate = useNavigate()

  useEffect(()=> {
    axios('http://localhost:3001/getUser/' + id)
    .then(result => {console.log(result)
      setName(result.data.name)
      setDesc(result.data.desc)
      setStatus(result.data.status)
      setPriority(result.data.priority)
    })
    .catch(err => console.log(err))
},[])

const submitHandler = (e) => {
   e.preventDefault()
   axios.put("http://localhost:3001/updateUser/"+id,
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
    <div>
      <div className='d-flex vh-100 bg-secondary bg-dark justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={submitHandler}>
             <h2>Update Project</h2>
             <div className='mb-2'>
             <label htmlFor="">Project Name</label>
             <input type="text" placeholder='Enter Project Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)}/>
             </div>

             <div className='mb-2'>
             <label htmlFor="">Description</label>
             <input type="text" placeholder='Description' className='form-control' value={desc} onChange={(e) => setDesc(e.target.value)}/>
             </div>

             <div className='mb-2'>
  <label htmlFor="status">Status</label>
  <select className='form-control' id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
  <option value="" disabled selected>Select</option>
    <option value="completed">Completed</option>
    <option value="pending">Pending</option>
  </select>
</div>

<div className='mb-2'>
  <label htmlFor="priority">Priority</label>
  <select className='form-control' id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
  <option value="" disabled selected>Select</option>
    <option value="Least">Higher</option>
    <option value="Medium">Medium</option>
    <option value="Lower">Lower</option>
  </select>
</div>
    <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default UpdateUser