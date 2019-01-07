const Model = require( "./../routes/Model" );
var jwt = require("jsonwebtoken");

const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', (req, res) => {
    res.send({username: 'Sam', role:'Admin'});
});

app.get("/:id", function(req, res) {
    try {
        let applicationId = req.param('id');
        console.log('In application from call..'+applicationId);

        return res.send(Model.application);
    } catch(err) {
        console.log('Error '+JSON.stringify(err));
    }
});

module.exports = app;