const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res)=>{
    res.send('hello!')
})

app.get('/help',(req,res)=>{
    res.send({
        name:'Vinayak',
        age: 22
    })
})


app.listen(3000,()=>{
    console.log("Serever running on port 3000")
})