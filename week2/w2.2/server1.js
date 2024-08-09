const express = require("express");

const app = express();

const port = 3000;

app.get('/service', (req,res) => {
    res.json({
        name: 'affu',
        age: 23
    })
    // res.send("hi")
})

app.post('/convo', (req,res) => {
    res.send({
        msg: "hey bro"
    })
})

app.get('/', (req,res) => {
    res.send('hello world!')
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})