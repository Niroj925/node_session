//to connect with mysql db yarn add mysql2
import express from 'express';
import { connect } from 'tls';
import userRouter from './route/userRouter.js';
import connection from './model/index.js';

const app = express();
//to parse json into js object form
app.use(express.json());
app.use('/usr',userRouter);

app.listen(8000,async()=>{
    console.log('server is running');
    //connecting to the database
    try {
        await connection.authenticate();
        connection.sync();
        //for creating new table and insert into we have to do 
        //connection.sync(force:true)
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
 
})