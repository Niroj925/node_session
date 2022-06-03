import bookModel  from '../model/bookModel.js';
import {Op} from "sequelize";
import text_constant from '../constant/const.js';
import img_consturl from '../constant/urlconst.js';
import { text } from 'node:stream/consumers';


export default class bookControl{
    async addBook(req,res,imageName){
        try{
            //to insert the data
        const data=await bookModel.create({...req.body,image:imageName});
        if(data){
            console.log(data);
            res.json(data);
        }else{
            res.json({success:false,msg:"not inserted"});
        }
    }catch(e){
        res.json({success:false,msg:e});
    }
        }

        //to get
        async getData(req,res){
            const{id}= req.params;
            if(id){
            const data=await bookModel.findByPk(id);
            if(data){
                res.json(data)
            }else{
                res.json({sucess:false,msg:text_constant.NO_DATA});
            }           
            }else{
                res.json({success:false,msg:text_constant.NO_ID});
            }
            }
            //update the
        async updateBook(req,res){
            const{id}= req.params;
            if(id){
            const data=await bookModel.update(req.body,{
                where:{
                    id//that is id=id;
                }
            })
            if(data){
                res.json({success:true,msg:'book updated'})
            }else{
                res.json({sucess:false,msg:text_constant.NO_DATA});
            }           
            }else{
                res.json({success:false,msg:text_constant.NO_ID});
            }
        }
        //delete
        async deleteBook(req, res){
            const{id}= req.params;
            if(id){
            const data=await bookModel.destroy({
                where: {
                    id:id
                },
            })
            if(data){
                res.json({success:true,msg:'book deleted'});
            }else{
                res.json({sucess:false,msg:text_constant.NO_DATA});
            }           
            }else{
                res.json({success:false,msg:text_constant.NO_ID});
            }
        }
        //search on the basis of book name and author name loook like
        async search(req,res){
            const {find}= req.query;
            console.log(find);
            if(find){
                const data=await bookModel.findAll({
                    where:{
                        [Op.or]:{
                            name:{
                                [Op.like]:`%${find}%`,
                            },
                          author:{
                              [Op.like]:`%${find}%`,
                          }

                        }
                    },
                    raw: true
                });

                 //for of loop gives the data values
      for(let d of data){
        //console.log(d.dataValues);
        //let modiefied the image name with full path of the image location and respond to the client
        d.image=img_consturl.img_url+d.image;//this is a full path of the image url
       console.log(d.image);
      }
                res.json(data);
            }else{
                res.json({success:false, data:"enter some query"});
            }

        }
        //get all books from db
  async getBook(req,res){
      let {limit}= req.query;
      
      if(!limit) limit=20;
      //expception handling should be operated in every operation
         try{
      const data = await bookModel.findAll({
       limit:parseInt(limit),//forlimited  outcomes
       //data values lable is given so remove this parameter
       //we can directly fetch that 
       raw:true,
      });
      
     //for of loop gives the data values
      for(let d of data){
          //console.log(d.dataValues);
          d.image=img_consturl.img_url+d.image;//this is a full path of the image url
         console.log(d.image);
        }
        
       res.json(data);
    }catch(e){
        res.json(e);
    }
  }

}