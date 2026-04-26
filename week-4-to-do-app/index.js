const express = require('express')
const app = express()

let todos = [];

app.use(express.json())

app.post('/',function(req,res){
    todos.push({
        title,
        id
    })
   
})

app.delete('/',function(req,res){
    todos = todos.filter(todo => todo.title !== req.body.title)
    res.json(todos)
})

app.listen(3000)