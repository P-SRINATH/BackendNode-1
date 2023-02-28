const sequelize=require('../db/db.config');
const {DataTypes}=require("sequelize");
exports.Product=sequelize.define('products',{
    product_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    product_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    product_price:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
},{
    createdAt:false,
    updatedAt:false,
    timestamps:false,
    freezeTableName:true
});