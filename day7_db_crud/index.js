//to connect with mysql db yarn add mysql2
import express from 'express';
import { connect } from 'tls';
import userRouter from './route/userRouter.js';

const app = express();
//to parse json into js object form
app.use(express.json());
app.use('/usr',userRouter);

app.listen(8000,()=>{
    console.log('server is running');
    //connecting to the database
 
})