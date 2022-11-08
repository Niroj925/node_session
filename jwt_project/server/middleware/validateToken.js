//this is used to validate the token from jwt 
import jwt from 'jsonwebtoken';
import "dotenv/config";

const validity= (req, res, next) =>{
    //lets take token from localstorage of frontend which we have been configured

const token=req.headers.token;
console.log(token);
if(token){
    try{
    const isValid=jwt.verify(token,process.env.JWT_SECRET);
    if(isValid) next();
    else 
     return res.status(403).json({success:false,message:"invalid token"});
}catch(err){
    return res.status(403).json(err);
};
}
else res.status(403).json('token not provided');


}
export default validity;