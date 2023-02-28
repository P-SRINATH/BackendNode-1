const expressAsyncHandler = require("express-async-handler")
const { Product }=require('../models/products.model')


const createproducts= expressAsyncHandler(async(req,res)=>{
    await Product.create(req.body)
    res.send({message:"New product is created"});
});


const getproducts= expressAsyncHandler(async(req,res)=>{
    let products=await Product.findAll();
    res.send({message:"Product details are : ",payload:products});
});


let prodata = {
    createproducts,
    getproducts
 }
 module.exports=prodata;
 