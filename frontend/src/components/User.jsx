import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import '../components/User.css'

const User = () => {
    const [user, setUser] = useState([])

    useEffect(()=> {
        axios('http://localhost:3001')
        .then(result => setUser(result.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
          axios.delete('http://localhost:3001/deleteUser/'+id)
          .then(res => {console.log(res)
            window.location.reload()
          })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-secondary bg-dark justify-content-center align-items-center">
            <div className="container-custom bg-white rounded p-3 responsive-container">
            <Link to='/create' className='btn btn-success mb-3'>Add Project</Link>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Description </th>
                            <th>Status</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((users) => {
                                return <tr>
                                    <td>{users.name}</td>
                                    <td>{users.description}</td>
                                    <td>{users.status}</td>
                                    <td>{users.priority}</td>
                                    <td>
                                    <Link to={`/update/${users._id}`} className='btn btn-success me-2'>Edit</Link>
                                        <button className='btn btn-danger'
                                        onClick={(e) => handleDelete(users._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default User