const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.json({
        msg:"hello from server side"
    })
})
const PORT = 3001
app.listen(PORT,(req,res)=>{
    console.log(`App is running successfully on ${PORT}`)
})