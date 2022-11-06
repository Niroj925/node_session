//validation of token 
export default((req,res,next)=>{
const token=req.headers.token;
if(token&&token==='niro'){
    console.log('token validated');
    next();
}else{
    console.log('could not validate token');
    res.status(403).send({success:false,message:'invalid message'});
}
});