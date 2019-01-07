var express = require("express");
//var session = require('express-session');
var bodyParser = require("body-parser");
//const expressJwt = require('express-jwt');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(session({secret: 'secretKey'}));

// api.use(function(req,res,next){
//     client.set("string key", "string val", redis.print);
//     next();
// });

// auth check
// const checkIfAuthenticated = expressJwt({
//     secret: 'todo-app-super-shared-secret'
// });
// app.get(checkIfAuthenticated);

var routes = require("./routes/routes.js")(app);
//app.use('/',require("./routes/routes.js"));

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
