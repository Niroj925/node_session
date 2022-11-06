import express from 'express';
import connection from './model/index.js';
import authRoute from "./route/authRouter.js";
import 'dotenv/config';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({
    origin:"*",//this is for all url request 
}));

app.get("/", (req, res) =>{
    res.json("backend is working well");
});

app.use('/auth',authRoute);




app.listen(process.env.PORT ||8000,async()=>{
    try{
        await connection.authenticate();
        console.log("connected to the db");
        connection.sync();
    }catch(err){
        console.log(err);
        
    }
})