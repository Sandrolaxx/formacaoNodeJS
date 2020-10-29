const express = require('express');
const app = express();

app.set('view engine','ejs');

//telling exprees that we're going to use statistical files - css, imgs...
app.use(express.static('public'));//need to create this folder

app.get('/',(req,res)=>{
    let products = [
        {name:'Nescau', price: 9.90},
        {name:'Monster', price: 8.90},
        {name:'Bj Baiano', price: 7.20}
    ]

    res.render('class_07', {
        products: products
    })
})

app.listen(4747, ()=> {console.log('App is running...')});