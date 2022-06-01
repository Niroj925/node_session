//this is for logical portion is here
import userModel from '../model/modelSchema.js';
import {Op} from 'sequelize';

 export default class Usercontroller{
    //add user
    async addUser(req,res) {
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
    console.log(data);
    res.status(200).json(data);
      }catch(e){
          console.log(e);
      }
    }
    //read operation 
    async getUser(req, res){
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
    }
    //update user 
    async updateUser(req, res){
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
     
    }
    //detlete user
    async deleteUser (req, res){
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
      
    }
    //to search in related content 
    async searchUser(req,res){
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
    }
}