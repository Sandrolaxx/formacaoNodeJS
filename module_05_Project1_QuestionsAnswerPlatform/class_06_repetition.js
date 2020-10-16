const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    let products = [
        {name:'Nescau', price: 9.90},
        {name:'Monster', price: 8.90},
        {name:'Bj Baiano', price: 7.20}
    ]

    res.render('class_06', {
        products: products
    })
})

app.listen(4747, ()=> {console.log('App is running...')});