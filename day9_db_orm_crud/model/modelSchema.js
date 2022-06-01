import { get } from 'https';
import { DataTypes } from 'sequelize';
import connection from './index.js';
//users is new table which is created by orm
const userModel= connection.define('users', {
    //id is bydefault
   
    username:{
        type:DataTypes.STRING,
        allowNull: false
    },
    location:{
        type:DataTypes.STRING,
        allowNull: false,

        //use setter for extra value to add
        //when set value we can add something using set 
        //this is imp to kept password 
        set(value){
            this.setDataValue('location',value+',Nepal');//this will add nepal after any location
        },

        //use get to get the data from user from db we can add something
        get(value){
          return  this.getDataValue('location')+' ok';//return with add ok 
        }
    }
},
//to disable timestamp
{
    timestamp:false,
    //just for one
    //creatAt:false,
    //to change name
    //updateAt:"updated_date"
}
);

export default userModel;