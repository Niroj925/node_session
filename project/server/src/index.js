import express from 'express';
import connection from './model/index.js';
import bookRoute from './route/bookRoute.js';
import cors from'cors';//for api
import 'dotenv/config';

const app = express();
//this is for api from client side we have to do this
app.use(cors({
    origin:"*",//this is for all url request 
}));
//to pasrse the data from api in json formate into js object 
//for our backend
app.use(express.json());
//to pasrse the dat if data are in url formate
app.use(express.urlencoded({ extended:false }));

app.use('/book',bookRoute);
//for static file to do not treat as a url route
//so we can directly access as data not a route
app.use(express.static('public'));

app.get('/', (req, res) => {
    //send directly to the client
    res.send("backend is working");
})

app.listen(process.env.PORT||8000,async()=>{
    console.log('server is running');
try{
    await connection.authenticate();
    //to make table if not exist
    connection.sync();
    console.log('successfully connected to the database');
}catch(err){
    console.log("unable to connect to the database",err);
}
    
})