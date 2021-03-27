const mongoose=require('mongoose')
const express = require('express')
const router = express.Router()

let Company=require('./company.modal');
const { find } = require('./company.modal');

router.route('/home').post((req,res)=>{
    const name=req.body.name;
    const symbol=req.body.symbol;
    const stock=req.body.stock_exchange.acronym;
    const country=req.body.stock_exchange.country;

    const newCompany=new Company({
        name,
        symbol,
        stock,
        country,
    })
    if(newCompany){
        newCompany.save()
        .then(()=>{res.status(201).json('saved successfully')})
         .catch(err=>{res.json(`something went wrong`)
     });
    }

})

router.route('/view').get((req,res)=>{
    
    Company.find().then(result=>res.send(result))
})
router.route('/view').post((req,res)=>{
    
    // Company.deleteOne(req).then(result=>res.send('result'))
    console.log(req.body)
    res.send('request recieved')
    const inter=Company.deleteOne(req.body);
       
    if(inter){
        console.log('match is found')
    }
    
})
module.exports=router