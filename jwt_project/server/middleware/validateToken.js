//this is used to validate the token from jwt 
import jwt from 'jsonwebtoken';
import "dotenv/config";

const validity= (req, res, next) =>{
    //lets take token from localstorage which we have been configured

const token=req.headers.token;
try{
if(token){
    const isValid=jwt.verify(token,process.env.JWT_SECRET);
    if(isValid) next();
    else 
    return res.status(403).json({success:false,message:"invalid token"});
}else res.status(403).json('token not provided');
}catch(err){
    return res.status(403).json(err);
};
}
export default validity;