import userModel from "../model/listModel.js";
import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export default class AuthController {
    async authenticate(req,res){
        try{
            //response of database
            const response=await userModel.findOne({
                where:{
                    email:req.body.email
                }
            });
            console.log(response);
            if(response===null){
                return res.json({success:false,msg:"user does not exist"});
            }else{
                //comapre with previously set credentials
                const match=bcrypt.compareSync(req.body.password,response.password);
                if(match){
                    //jwt 
                    //the main concept of jwt is generate a token and verify it in backend in each time
                    //let's make a 
                    //we can kept any data  here id and another is a string and 
                  const token=  jwt.sign({id:response.id},process.env.JWT_SECRET,
                    { 
                       expiresIn:"2 days",   //this is for validation of generated token which is in ms
                    })
                    //set the token value in sequelize database and respond this
                    //in sequelize all the data are set into the data values
                    delete response.dataValues .password;
                    response.dataValues.token = token
                    res.json(response);
                }else{
                    res
                    .status(403)
                    .json({success:false,message:"invalid credentials"});
                }
            }
        }catch(e){
         res.json(e);
        }
    }

    async addUser(req,res){
        try{
        const response=await userModel.create({...req.body});
        if(response===null)return res.json ([]);
        else return res.json (response)
        }catch(err){
            res.json (err);
        }
    }

    async listUser(req,res){
        try{
            const response=await userModel.findAll({});
            if(response===null)return res.json ([]);
            else return res.json (response);
        }catch(err){
            console.log(err);
        }
    }
}