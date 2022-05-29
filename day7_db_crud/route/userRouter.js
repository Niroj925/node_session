
import express from 'express';
import connection from '../config/connection.js';

const router= express.Router();

//creat and insert in database
router.post("/add",async (req,res) => {
    
    //console.log(req.query);
    //now destructuring the data from client
    const{id,name,age}=req.body;
    console.log(id,name,age);
     console.log(`your name is ${name}`);
       //use prepared statement in values we put ? 
    //use premises method
    /*
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  
    var sql = `INSERT INTO user (id,name,age) VALUES (?,?,?)`;
   let val=[id,name,age];
    connection.query(sql,val, function (err, result) {
        console.log(result);
      if (err) throw err;
      console.log("1 record inserted");
     
      if(result.affectedRows===1)
          res.status(200).json({success:true,message:'inserted one items'});
       else
       res.status(403).json({success:false,message:'unable to insert item'});
    });
  });
  */
 
 const [rows,fields]= await connection.query(
  `INSERT INTO user (id ,name,age) VALUES(?,?,?)`,
  [id,name,age]
 );
 res.status(200).json(rows);
 
});

//fetch the data from the database
router.get('/:id',(req, res) => {
    //it takes parameters so
    //restructing varaible
    const {id}=req.params;
   if(id){
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `SELECT *FROM user WHERE id=${id}`;
        connection.query(sql, function (err, result) {
            console.log(result);
               res.status(200).json(...result);
        });
      });
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
        
        const {name,age}=req.body;
        /*
        connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = `UPDATE user SET name='${name}' ,age='${age}' WHERE id='${id}'`;
            connection.query(sql, function (err, result) {
                console.log(result);
                  if(result.affectedRows===1)
                  res.status(200).json({success:true,message:'updated one item'});
                  else
                  res.status(200)
            });
          });
          */
          const [rows,fields]= await connection.query(
            `UPDATE user SET name=? ,age=? WHERE id=?`,
            [name,age,id]
           );
           res.status(200).json(rows);
           

    }else{
        res.status(403).json({success:false,message:'id does not provided'});
    }
})
//delete items from database
router.delete('/delete/:id',async (req, res)=>{
    const {id}= req.params;
    /*
    if(id){
        connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = `DELETE FROM user WHERE id='${id}'`;
            connection.query(sql, function (err, result) {
                console.log(result);
                  if(result.affectedRows===1)
                  res.status(200).json({success:true,message:'deleted one item'});
                  else
                  res.status(200)
            });
          });
    }else{
        res.status(403).json({success:false,message:'id does not provided'});
    }
    */
   //this is done using permises 
   if(id){
    const [rows,fields]= await connection.query(
        `DELETE FROM user WHERE id='${id}'`,
       );
       res.status(200).json(rows);
   }else{
    res.status(403).json({success:false,message:'id does not provided'});
   
   }
})
export default router;
