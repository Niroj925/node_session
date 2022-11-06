import express from 'express';
import meroRoute from './route/profile.route.js';
//to restrict more request from pc 
//for api request rate limit this is  also a middleware
import rateLimit from 'express-rate-limit';

//we can use helmet library to prevent from attack 
const app = express();
//to parse json formate data we have call these follwing express functions
app.use(express.json());
//to parse form-encoded data we  have call this function
app.use(express.urlencoded({extended: true}));
//it's a middleware take request form front and parse and give a response or not in this area 
//let's kept a middleware
//it is a phase between request and response
app.use((req,res,next)=>{
    //headers from api we have kept token validate 
    //console.log(header);
    console.log(' middleware phase responding soon');
  next();
});

//for limited requests in a certain period we have to make limit from express 
//this a thirdparty middleware which restrict to many requests from same ip 
const limiter=rateLimit({
windows:15*60*100 ,//this is in each 15 minutes 
max:5,//this is max 50 requests per 15 min 
standardHeader:true,
legacyHeader:false
})
app.use(limiter);


//if we provide  file in the form of url express take as route 
//to access static file or folder from our project we have to do first 
//we specify static folder of file to understand for express 
//this is not route it's a static folder
//this is a inbuilt middleware 
app.use(express.static('public'));


app.get('/', function(req, res){
    res.status(200).send('this is our homepage');

})

app.use('/profile',meroRoute);

app.listen(4004, function(){
    console.log('server is running');
})