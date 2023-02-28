const sequelize=require('../db/db.config');
const {DataTypes}=require("sequelize");
exports.Order=sequelize.define('orders',{
    order_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    order_date:{
        type:DataTypes.DATE,
        allowNull:false
    },
},{
    createdAt:false,
    updatedAt:false,
    timestamps:false,
    freezeTableName:true
});