
var redis = require('redis').createClient();

console.log('Connected to redis....');

module.exports = redis;