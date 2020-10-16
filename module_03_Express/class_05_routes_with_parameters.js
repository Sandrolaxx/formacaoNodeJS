const express = require("express");
const app =  express();

//Starting server on port 8181
app.listen(8181);

//Examples of routes with params
app.get('/home/:name', function(req, res){
    var name = req.params.name;
    res.send('<h1>Welcome ' + name + '</h1>')
});

//Exemple route with params not required 
app.get('/route/:required?', function(req, res){
    let required = req.params.required;

    if(required) {
        res.send('<h1>Page with informed parameter: ' + required + '</h1>')
    }else {
        res.send('<h1>Parameter not informed</h1>')
    }
    
}); 

// ---- QUERY PARMS - Optional parameters that users choose to pass

//Ex
app.get('/testquery', function(req, res) {
    let query = req.query["param"];

    if(query) {
        res.send(query);
    } else {
        res.send('No query reported');
    }

})