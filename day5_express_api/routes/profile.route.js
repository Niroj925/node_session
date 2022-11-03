//seperate file for routing
//to manage these all router 
//from express 

import express from 'express';

const router=express.Router();

router.get('/',function(req,res){
    res.status(200).json({name:"Niroj Thapa"});
})
//if parameters are pass then handle that so 
router.get('/name/:parameters',function(req,res){
    console.log(req.params);
    
    res.send('entered params parameter is : '+ req.params.parameters);
})
router.get('/delet',function(req,res){
    //if query send from client then print
    console.log(req.query);
    //destructuring query 
    const{nam,age}=req.query;
    console.log(nam,age);

    res.status(200).json({delet:true});
})

export default router;