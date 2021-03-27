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
.delete(async(req,res)=>{
    

   const element= await Company.deleteOne({name:req.body.name}).then(result=>{
      
    res.send(' delete request recieved')
    return console.log(element)})
})
module.exports=router