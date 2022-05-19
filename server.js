const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const EmployeeData = require('./employesData.json');

app.get("/",(req,res)=>{
    res.send("Hello EveyOne!!!")
})

app.get('/Edata',(req,res)=>{
    res.send(EmployeeData)
})

app.listen(port,()=>{
    console.log(`App is Running Locally on Port http://localhost:${port}`)
})