import express from 'express';
import passport from 'passport';
import  "./auth.js";
import session from "express-session";
import { send } from 'process';
import cors from 'cors';
import authRouter from './route/authrouter.js';

//session is used to make a token and send to the front end and kept to the cokie
//and next time that token send to the backened and verify it 
const {SESSION_SECRET}=process.env;

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const router=express.Router();

// app.use(cors({
//     origin:"*",//this is for all url request 
//method:["get","post","put"]
// }));

app.use(cors({
    origin:" * "
}))

//using express session for authuntication 
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }

  }))
  app.use(passport.initialize());
  app.use(passport.session());

app.use('/auth',authRouter)
app.listen(8080,()=>{
    console.log('server is running');
})