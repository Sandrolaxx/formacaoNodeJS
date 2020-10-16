const express = require("express");
const app = express();

app.listen(8181, function(err) {
    if (err) {
        console.log('Error has occurred')
    } else {
        console.log('Server is running...')
    }
});