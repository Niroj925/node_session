import {Router} from "express";
import passport from 'passport';

const router=Router();

router.get('/auth',(req,res)=>{
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
router.get('/auth/google',
passport.authenticate("google",{scope:['profile','email']}))


//this is a callback function this will immediately redirect and call this function
router.get('OAuth/auth/google/callback',
passport.authenticate('google',{
    successRedirect:'/login/success' ,
    failureRedirect:'/login/failed'
})
)

router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('http://localhost:3000')
})

export default router;