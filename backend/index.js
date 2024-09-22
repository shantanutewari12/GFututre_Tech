const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/CRUD")

app.post("/createProject", (req, res) => {
       userModel.create(req.body)
       .then(users => res.json(users))
       .catch(err => res.json(err))
})

app.get("/", (req, res) => {
    userModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id
    userModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        description: req.body.description, 
        status: req.body.status, 
        priority: req.body.priority
    }, {new: true})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id
    userModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id
    userModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})