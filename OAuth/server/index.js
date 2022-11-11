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

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
   // cookie: { secure: true }

  }))

  app.use(passport.initialize());
  app.use(passport.session());

  //let's make a middleware to validate 
  const validatelogin=(req, res,next) => {
      //if user exist
      req.user?next():res.sendStatus(401)//401 mean unauthorize
  }

app.use('/OAuth',authRouter)

// app.get('/',(req,res)=>{
//     res.send('<a href="auth/google">sign up with google</a>');
// })
// //for oauth is done for google through passport

// app.use('/auth/google',
// passport.authenticate('google',{scope:['profile','email']})//we can get profile email and public in from google
// )

// //this is a callback function this will immediately redirect and call this function
// app.get('/auth/google/callback',
// passport.authenticate('google',{
//     successRedirect:'/dashboard',
//     failureRedirect:'/auth.err'
// })
// )

// //middlware is set here to validate user
// //google send a code to validate your account 
// app.get('/dashboard',validatelogin,(req, res)=>{
//     res.send('successfully redired to the google OAuth');
// })

// app.get('/auth/err',(req, res)=>{
//     res.send("unable to verified");
// })

//let make a log out first we have to destroy the session
app.get('/dashboard/logout',(req, res)=>{
    req.logOut((err)=>{
        if(err)throw err;
        else
        {
            req.session.destroy();//session is expire it does not work 
            res.redirect('/');
        }
    })
})
app.listen(8080,()=>{
    console.log('server is running');
})