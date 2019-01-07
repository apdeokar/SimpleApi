var jwt = require("jsonwebtoken");

const express = require('express');
const app = express();
var client = require('./../redis');



app.post("/login", function(req, res) {
    console.log("In login api "+JSON.stringify(req.body));

    const username = req.body.username, password = req.body.password;

    // check in redis db whether the user exists or not
    client.hgetall(username, function(err, obj) {
        if(!obj) {

            console.log('User doens not exist');
            //res.sendStatus(401); 
            res.status(401).send({message : 'User does not exists'});
            // User doens not exist

        } else if(obj && obj.password !== password) {

            res.status(401).send({message : 'Password is invalid'});

        } else {

            console.log('User exists'+JSON.stringify(obj));
            const token = jwt.sign({userId: username}, 'todo-app-super-shared-secret', {expiresIn: 180});
            res.status(200).send({
                idToken: token,
                expiresIn: 180 
                });   

        }
    });
});

app.get('/', (req, res) => {
    res.send({username: 'Sam', role:'Admin'});
});

module.exports = app;