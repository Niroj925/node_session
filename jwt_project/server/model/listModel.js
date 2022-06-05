import connection from './index.js';
import bcrypt from  "bcrypt";
import 'dotenv/config';
import {DataTypes} from "sequelize";

export default connection.define(
    'table',
    //let make a table
    {
       email:{
           type: DataTypes.STRING,
           unique: true
       },
       password:{
           type: DataTypes.STRING,
           set(value){
               console.log("value:"+value);
               const hashedPassword=bcrypt.hashSync(value,10);

               console.log('from end values:'+value);
               this.setDataValue('password',hashedPassword);
           },
       },
    },
    {
        timestamps:false
    }
    
    );