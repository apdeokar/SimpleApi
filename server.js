let express = require('express')
var https = require('https');
const app = express()
var bodyParser = require("body-parser");
const expressJwt = require('express-jwt');
var fs = require('fs');

const routes = require('./controllers');

var client = require('./redis');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(expressJwt({secret: 'todo-app-super-shared-secret'}));
app.use(expressJwt({secret: 'todo-app-super-shared-secret'}).unless({path: ['/','/user/login']}));

app.use('/', routes);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept, Content-Type,Authorization, Engaged-Auth-Token");
    //res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
  });
  
app.use(function (err, req, res, next) {
  console.error(JSON.stringify(err));
  if(err.name === 'UnauthorizedError') {
    res.status(401).send('User is not authorized');
    return;
  } else {
    res.status(500).send('Something broken!');
    return;
  }
  next();
});

var options = {
    key: fs.readFileSync( 'server.key' ),
    cert: fs.readFileSync( 'server.cert' ),
    //requestCert: false,
    //rejectUnauthorized: false
};

var server = https.createServer( options, app );
server.listen(3000, function () {
    console.log("Server started and listening on port %s...", server.address().port);
});

// var server = app.listen(3000, function () {
//     console.log("Server started and listening on port %s...", server.address().port);
// });

// var https = require('https');
// https.createServer({
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.cert')
//   }, app)
//   .listen(3000, function () {
//     console.log('Example app listening on port 3000! Go to https://localhost:3000/')
//   })
