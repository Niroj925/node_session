import express from "express";
import {addUser,getUser} from "./model/userSchema.js";

const app = express();

const obj={
    name:'kaji',
    age:"21",
    add:"dolakha"
}
app.listen(8080,(res,req)=>{
    getUser();
    console.log('server is running');
})


