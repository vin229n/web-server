const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates')

//Setup handlers engine and views location
app.set('view engine', 'hbs')
app.set('views',viewsPath)

//SetUp static directory to serve 
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather app',
        name: 'Vinayak'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name: 'Vinayak'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'need help?',
        name: 'Vinayak'
    })
})




app.listen(3000,()=>{
    console.log("Serever running on port 3000")
})

