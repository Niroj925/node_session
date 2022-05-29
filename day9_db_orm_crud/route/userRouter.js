
import express from 'express';
import connection from '../model/index.js';
import userModel from '../model/modelSchema.js';
import {Op} from 'sequelize';

const router= express.Router();

//creat and insert in database
router.post("/add",async(req,res) => {
    
    //console.log(req.query);
    //now destructuring the data from client
    const{username,location}=req.body;
    console.log(username,location);
     console.log(`your name is ${username}`);
    //use premises method
  try{

const data=await userModel.create({
    username:username,
    location:location
});
/*
//to insert multiple data at a time bulk data into the database
const data=await userModel.bulkCreate(req.body);
*/
console.log(data);
res.status(200).json(data);
  }catch(e){
      console.log(e);
  }
});

//fetch the data from the database
router.get('/:id',async(req, res) => {
    //it takes parameters so
    //restructing varaible
    const {id}=req.params;
   if(id){
       const data=await userModel.findByPk(id);
       
       if(data){
           res.json(data);
       }else{
           res.json({success:false,message:'data not found in this id'});
       }
   }
   else
   {
       res.status(403).json({success:false,message:'unable to get id'});
   }
})

//update databases
router.put('/update/:id',async(req, res)=>{
    const {id} = req.params;

    if(id){
        
        const {username,location}=req.body;

        const data=await userModel.update(
            {username,location},
            {
                where: {
                    id,//in case of if key val are same we can write like this instead of id=id
                }
            });
            console.log(data);
          if(data){
              res.json({success:true,msg:'updated successfully'});
          }else{
              res.json({success:false,msg:'id does available'});
          }
        }
        else
        {
            res.status(200).json({success:false,message:'id not found'});
                  
        }
 
})
//delete items from database
router.delete('/delete/:id',async (req, res)=>{
    const {id}= req.params;
    if(id){

        const data=await userModel.destroy({
            where: {
                id,
            }
        });
        console.log(data);
        if(data){
            res.json({success:true,message:'deleted one item successfully'});
        }else{
            res.json({success:false,message:'id not found'});
        }
    }else{
        res.status(403).json({success:false,message:'id does not provided'});
    }
  
})
//operator use to find something with hint value
router.get('/search/by',async(req,res) => {
    const {location}=req.query;
        console.log(location);
    const data=await userModel.findAll({
        where: {
            location:{
                [Op.like]:`%${location}%`,
            }
        }
    })
    console.log(data);
    res.json(data);
})
export default router;