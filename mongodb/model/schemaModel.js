import mongoose from 'mongoose';

//let create schema 
const listSchema=new  mongoose.Schema({ 
   //we can give a schema like this
    title:{
        type:String,
        required:true
    },
    description:String
},{ timestamps:true}
);
//now make a model 
const listModel=mongoose.model('list',listSchema);//list is a table
// module.exports=listModel;
export default listModel;