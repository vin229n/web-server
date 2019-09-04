const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlers engine and views location
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//SetUp static directory to serve 
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather app',
        name: 'Vinayak'
    })
})

app.get('/weather',(req,res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide search address'
        })
    }

    res.send({
        Address: req.query.address
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

app.get('/help/*',(req,res) => {
    res.render('notfound',{
        title:'404',
        name:'Vinayak',
        error:'Help Article Not Found'
    })
})

app.get('*',(req,res) =>{
    res.render('notfound',{
        title:'404',
        name:'Vinayak',
        error:'Page Not Found'
    })
})

app.listen(3000,()=>{
    console.log("Serever running on port 3000")
})

