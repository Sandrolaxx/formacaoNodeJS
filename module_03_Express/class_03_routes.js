const express = require("express");
const app =  express();

//Starting server on port 8181
app.listen(8181);

//Examples of routes
app.get('/', function(req, res){
    res.send('<h1>My Home</h1>')
});

//Exemple route
app.get('/exemple', function(req, res){
    res.send('<h1>--Sample route test--</h1>')
});