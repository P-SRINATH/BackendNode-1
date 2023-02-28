const exp=require("express");
const app=exp();

// configure dotenv
require("dotenv").config()

const PORT=process.env.PORT||4000;
app.listen(PORT,()=>console.log(`Server at port no ${PORT}..`))

//Database connection using sequelize
const sequelize=require('./db/db.config')
sequelize.authenticate()
.then(()=>console.log("DB Connection is successfull"))
.catch(err=>console.log("Error in Db connection",err))

//Customer and Product routes imported here 
const CustApp=require('./routes/customers.route')
const productApp=require('./routes/products.route')

//Using the routes in Main server
app.use("/customer-api",CustApp)
app.use("/product-api",productApp)

sequelize.sync();
app.use((err,req,res,next)=>{
    res.send({errmessage :err.message.replaceAll("Validation error: "," ").split('\n')})
})

//sequelize.sync({force:true});

module.exports=app;