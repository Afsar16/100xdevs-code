const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPassword = "123456";

const app = express();

app.use(express.json())

const ALL_USERS = [
    {
        username: "a@gmail.com",
        password: "1235",
        name: "affu1"
    },
    {
        username: "c@gmail.com",
        password: "1243",
        name: "affu2"
    },
    {
        username: "b@gmail.com",
        password: "1234",
        name: "affu3"
    },
];

function userExists(username, password) {
    let userExist = false;

    for(let i=0; i<ALL_USERS.length; i++) {
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExist = true
        }
    }

    return userExist;
}

app.post('/signin', function(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "user doesnt exist in out in memory db",
        })
    }
    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    })
})

app.get('/users', function(req, res) {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        console.log(decoded)
        console.log(username)
        res.json({
            users : ALL_USERS.filter(function(value) {
                if(value.username == username) {
                    return false;
                }
                else {
                    return true;
                }
            })
        })
    } catch(err) {
        return res.status(403).json({
            msg: "Invalid token",
        
        })
    }
    // return res.json({
    //     users: ALL_USERS,
    // })
})


app.listen(3000, function() {
    console.log("server is running on port 3000")
});

