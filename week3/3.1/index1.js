const express = require('express')

const app = express();

app.get('/health-chekup', (req,res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kedneyId = req.query.kedneyId;

    if(username == "afsar" && password == "affu") {
        if(kedneyId == 1 || kedneyId == 2) {
            res.json({
                msg: "kidney is fine"
            })
        } else {
            res.json({
                msg: "not fine"
            })
        }
    }
    res.status(400).json({"msg": "something went wrong in the input"})

});

app.listen(300);