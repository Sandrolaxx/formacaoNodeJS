const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    let msgPopUp = true;

    res.render('class_05', {
        msg: msgPopUp
    })
})

app.listen(4747, ()=> {console.log('App is running...')});