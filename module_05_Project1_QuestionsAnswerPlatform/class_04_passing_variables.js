const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    let name = 'Sandrolax';
    let age = 21;

    res.render('class_04', {
        name: name,
        age: age,
        company: 'Create One'
    })
})

app.listen(4747, ()=> {console.log('App is running...')});