const exp=require("express");
const ProdApp=exp.Router();
const {
    createproducts,
    getproducts
} = require("../controllers/products.controllers")
 
ProdApp.use(exp.json())

ProdApp.post('/product', createproducts)

ProdApp.get('/products', getproducts)

module.exports=ProdApp;