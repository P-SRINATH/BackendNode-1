const sequelize=require('../db/db.config');
const {DataTypes}=require("sequelize");
exports.Customer=sequelize.define('customer',{
    customer_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    customer_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    customer_email:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    createdAt:false,
    updatedAt:false,
    timestamps:false,
    freezeTableName:true
});