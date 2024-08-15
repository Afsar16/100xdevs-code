const mongoose = require('mongoose')
const express = require('express')

const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://afsarm1606:100xdevs@cluster0.dfpbe.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0") // net/user? -> users is db name 

const userModel = mongoose.model('users', {name: String, password: String, email: String })
// users is table name 
// user1 = new userModel({
//     name: "affu", 
//     password: "1234",
//     email: "a@gmail.com"
// })
app.post("/signup", async function (req,res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await userModel.findOne({email: username});
    if(existingUser) {
        return res.status(400).send("username already exists")
    }
    const user = new userModel({
        name: name,
        email: username,
        password: password,
    })
    
user.save();
res.json({
    "msg": "user created successfully"
})
})

// user.save(); // to write the data into the db 


app.listen(3000);