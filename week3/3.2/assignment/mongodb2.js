const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://afsarm1606:100xdevs@cluster0.dfpbe.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0")

const userModel = mongoose.model('UserC', {name: String, password: String, email: String })

user1 = new userModel({
    name: "affu",
    password: "1234",
    email: "a@gmail.com"
})

user1.save();