const expressAsyncHandler =require("express-async-handler")
//Importing models
const { Customer }=require('../models/customers.model')
const { Product }=require('../models/products.model')
const { Review }=require('../models/reviews.model')
const { Order }=require('../models/orders.model')
const { Address }=require('../models/address.model')
//create customer

//One to one relation using customer and address
Customer.hasOne(Address,{foreignKey:{name:"customer_id",timestamps:false}})
Address.belongsTo(Customer,{foreignKey:{name:"customer_id",timestamps:false}})

const createCustomer = expressAsyncHandler(async(req,res)=>{
   let [customer]= await Customer.findAll({where:{customer_email: req.body.customer_email},
   });
   if(customer){
      let address=await Address.create(req.body.address)
         customer.setAddress(address)
         res.send({message:"Address created successfully"})
   }
   else{
      let cus=await Customer.create(req.body)
      let address=await Address.create(req.body.address)
      cus.setAddress(address)
      res.send({message:"Customer created"})
   }
});

//Create a Many to many relation between Customer and product through Review.
Customer.belongsToMany(Product,{through: Review,foreignKey:{name:"customer_id",timestamps:false}})
Product.belongsToMany(Customer,{through: Review,foreignKey:{name:"product_id",timestamps:false}})

//create cusreview
const createCustomerReview = expressAsyncHandler(async(req,res)=>{
   await Review.create(req.body)
   res.send({message:"Review created"});
});

//get customer reviews
const getCustomerReviews = expressAsyncHandler(async(req,res)=>{
   let reviews=await Review.findAll();
   res.send({message:"All customer reviews",payload:reviews})
});

//get review by customer_id
const getCustomerReviewByID = expressAsyncHandler(async(req,res)=>{
   let customer =req.params.customer_id;
   let reviews=await Review.findAll({where:{customer_id:customer}})
   res.send({customer_id:customer,review:reviews});
})

//Create many to many realtion via orders between Customer and Product
Customer.belongsToMany(Product,{through: Order,foreignKey:{name:"customer_id",timestamps:false}})
Product.belongsToMany(Customer,{through: Order,foreignKey:{name:"product_id",timestamps:false}})

//create Customer order
const createCustomerOrder = expressAsyncHandler(async(req,res)=>{
   await Order.create(req.body);
   res.send({message:"Orders created"});
});

//get customer details
const getCustomers = expressAsyncHandler(async(req,res)=>{
   let customers=await Customer.findAll();
   res.send({message:"All customers",payload: customers});
});

//get customer orders
const getCustomersOrders = expressAsyncHandler(async(req,res)=>{
   let customer =req.params.customer_id;
   let orders=await Order.findAll({where:{customer_id:customer}})
   res.send({customer_id:customer,orders_placed:orders});
});

const getaddress=expressAsyncHandler(async(req,res)=>{
   let address=await Address.findAll();
   res.send({message:"Addresses available are : ",payload: address});
})

let custdata = {
   createCustomer,
   createCustomerReview,
   createCustomerOrder,
   getCustomerReviewByID,
   getCustomers,
   getCustomersOrders,
   getCustomerReviews,
   getaddress
}
module.exports=custdata;

