//differnet https request method or routing method
import express from 'express';
import validateToken from '../middleware/validationToken.js';

const router=express.Router();
//middleware
//this is a router level middleware
router.use((req,res,next)=>{
    //next is used to after completed the function of the middleware to respond something 
    validateToken(req,res, next);
})
//post method is use to get  data from body 
router.get('/', function(req, res){
    res.status(200).send('this is homepage');
})
//in post method we can pass query as well as body json data
//middleware is kept before response here
//for  multiple validation we can make a array for these middleware and pass this array like [vt,valid,...]
//or we can make array of middleware const middleware =[validateToken,token,apitoken]
router.post('/add',validateToken, function(req, res){//here validateToken is  a middleware so token is validate two times 
    //this data come from frontend and this function
    //this is in json formate so parse this data and catch
  console.log(req.body,req.query);
  res.send('add something in this route');
})
router.get('/name/:parameters', function(req, res){
   console.log(req.params);
    res.status(200).json(req.body);
    console.log(req.body.name)
})

router.delete('/delete', function(req,res){
    //query can be pass in get method 

    console.log(req.query);

    res.status(200).json({delet:true});
})

export default router;