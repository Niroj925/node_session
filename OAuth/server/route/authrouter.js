import {Router} from "express";
import passport from 'passport';

const router=Router();

router.get('/',(req,res)=>{
    const response={"success":"hit server"}
res.json(response)
console.log(response)
}
);

router.get("/login/success",(req,res)=>{
    if(req.user){
        res.status(200).json({
            error:false,
            msg:"successfully login",
            user:req.user
            //cookies:req.cookies
            //jwt
        })
    }else{
        res.status(403).json({error:true,msg:"user not authorized"})
    }

})

router.get('/login/failed',(req,res)=>{
    res.status(401).json({
        error:true,
        msg:"login failed"
    })
})
router.get('/google',
passport.authenticate("google",{scope:['profile','email']}))


//this is a callback function this will immediately redirect and call this function
router.get('/google/callback',
passport.authenticate('google',{
    successRedirect:'http://localhost:3000/login' ,
    failureRedirect:'/login/failed'
})
)

router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('http://localhost:3000')
})

export default router;