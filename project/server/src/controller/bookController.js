import bookModel  from '../model/bookModel.js';
import {Op} from "sequelize";


export default class bookControl{
    async addBook(req,res,imageName){
        const data=await bookModel.create({...req.body,image:imageName});
        if(data){
            console.log(data);
            res.json(data);
        }else{
            res.json({success:false,msg:"not inserted"});
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
                res.json({sucess:false,msg:'data not found'});
            }           
            }else{
                res.json({success:false,msg:'id not found'});
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
                res.json({sucess:false,msg:'data not found'});
            }           
            }else{
                res.json({success:false,msg:'id not found'});
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
                res.json({sucess:false,msg:'data not found'});
            }           
            }else{
                res.json({success:false,msg:'id not found'});
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
                    }
                });
                res.json(data);
            }else{
                res.json({success:false, data:"enter some query"});
            }

        }
        //get all books from db
  async getBook(req,res){
      let {limit}= req.query;
      
      if(!limit) limit=20;

console.log(limit);
      const data = await bookModel.findAll({
       
      });
      res.json(data);
  }

}