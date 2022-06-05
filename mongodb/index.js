import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config";
import blogRoutes from './route/blogRouter.js';


const app = express();
app.use('/blog',blogRoutes);
app.use(express.json());//this is for json data to convert into js object form
app.use(express.urlencoded({ extended:false}));//this is for form data

app.listen(8080, async () => {
    console.log('server is running 💯');
    try {
        //connect to the mongo db
        await mongoose.connect(process.env.Mongo_DB_Connection_URL);
        console.log('connected to the DB');
    } catch (e) {
        console.log(e)
    }
});