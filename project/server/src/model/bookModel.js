import connection from "./index.js";
import {DataTypes} from "sequelize";

//creat books table 
export default connection.define('books',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    //for image we have to add package multer
    
    image:{
        type:DataTypes.STRING,
        allowNull:true
    },
    
},
{
    timestamps:false,
})