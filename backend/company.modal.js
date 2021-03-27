const express=require('mongoose');
const mongoose=require('mongoose')

const companySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    symbol: {
        type: String,
    },
    stock: {
        type: String,
    },
    country: {
        type: String,
    },
    
  },{timestamps:true});

  const Company = mongoose.model('Company', companySchema);

  module.exports=Company;
