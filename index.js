const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser:true});
require('./src/models/Product');

const productModel = mongoose.model('Product');
app.get('/', (req, res)=>{
    productModel.create({
        title:'Chocolate cake',
        description:'A delicious chocolate cake!',
        url:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjc3_myrLzgAhX7E7kGHZzgDtgQjRx6BAgBEAU&url=https%3A%2F%2Fsugarspunrun.com%2Fchocolate-cake%2F&psig=AOvVaw0amqM0j3iGlXXiL1Ub72bz&ust=1550272271573335'        
    });
    return res.send('Hello mixa!');
});

app.listen(3001,()=>console.log('mixa started'));