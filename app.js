const express = require('express');

const app = express();

app.get('/', (req,res) =>{
    res.send("Ask Talabi...");
});

const port = 3000;
app.listen(port, ()=>{
    console.log("server started on port 3000");
});