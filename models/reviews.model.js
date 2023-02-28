const sequelize=require('../db/db.config');
const {DataTypes}=require("sequelize");
exports.Review=sequelize.define('reviews',{
    review_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    review_date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    review_desc:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    createdAt:false,
    updatedAt:false,
    timestamps:false,
    freezeTableName:true
});