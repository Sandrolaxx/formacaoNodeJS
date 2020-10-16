const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('class_03')
})

app.listen(4747, ()=> {console.log('App is running...')});