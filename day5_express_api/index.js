//todays session is about express js framework and rest api
//this more better than normal js which is done in day 4
import express from 'express';
import profileRoute from './routes/profile.route.js'

const app= express();

//for request handling we can do by using express

app.get('/',function(req,res){
    //status and send message for client
    res.status(200).send('backend is working well');
})

app.use('/profile',profileRoute);

app.listen(4000,()=>{
    console.log('server is running');
})