const exp=require("express");
const CustApp=exp.Router();

//Import the controllers
const {
    createCustomer,
    createCustomerReview,
    createCustomerOrder,
    getCustomerReviewByID,
    getCustomers,
    getCustomersOrders,
    getCustomerReviews,
    getaddress
} = require("../controllers/customers.controllers")
 
CustApp.use(exp.json())

//Route to customer details
CustApp.post('/customer',createCustomer)

// Route to GET all customers
CustApp.get('/customers',getCustomers)

//-------------------------------------------------------------------->
//Route to customer reviews
CustApp.post('/customer-review',createCustomerReview)

// Route to GET all reviews of a customer
CustApp.get('/getcustomer-reviews',getCustomerReviews)

//Route to get customer-reviews details by Id
CustApp.get('/getcustomer/:customer_id',getCustomerReviewByID)
//-------------------------------------------------------------------->

// Route to customer orders
CustApp.post('/customer-order',createCustomerOrder)

// Route to GET all orders of a customer
CustApp.get('/customer-orders/:customer_id',getCustomersOrders)
//--------------------------------------------------------------------->

//Route to get address of  customers 
CustApp.get('/getaddress',getaddress)

module.exports=CustApp;