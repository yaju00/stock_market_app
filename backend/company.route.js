const mongoose=require('mongoose')
const express = require('express')
const router = express.Router()

let Company=require('./company.modal');
const { find, findByIdAndDelete } = require('./company.modal');

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

    Company.findOne({name:name})
    .then(result=>{
        if(result){
                res.send('data already exist') 
             }
        else{
            newCompany.save()
            .then(()=>{res.status(201).json('saved successfully')})
        }
    }).catch(err=>console.log(err))
})

router.route('/view').get((req,res)=>{
    Company.find().then(result=>res.send(result))
})
.post((req,res)=>{   
   Company.deleteOne({name:req.body.name}).then(result=>{
    res.send(' delete request recieved')
    console.log(result)})
    .catch(err=>err)
})
module.exports=router