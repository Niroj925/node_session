//differnet https request method or routing method
import express from 'express';
import validateToken from '../middleware/validationToken.js';

const router=express.Router();
//middleware
router.use((req,res,next)=>{
    validateToken(req,res,next);
})
//post method is use to get  data from body 
router.get('/', function(req, res){
    res.status(200).send('this is homepage');
})
//in post method we can pass query as well as body json data
//middleware is kept before response here
//for  multiple validation we can make a array for these middleware and pass this array 
router.post('/add',validateToken, function(req, res){
    //this data come from frontend and this function
    //this is in json formate so parse this data and catch
  console.log(req.body,req.query);
  res.send('add something in this route');
})
router.get('/name/:parameters', function(req, res){
   console.log(req.params);
    res.status(200).json({name:'niroj thapa'})
})

router.delete('/delete', function(req,res){
    //query can be pass in get method 

    console.log(req.query);

    res.status(200).json({delet:true});
})

export default router;