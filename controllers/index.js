const express = require('express');
const app = express();

const userRoute = require('./user');

app.get('/', function (req, res) {
  res.send('hello world')
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept, Content-Type,Authorization, Engaged-Auth-Token");
  //res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});
app.use('/user', userRoute);
app.use('/application', require('./application'));

module.exports = app;