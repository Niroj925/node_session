import {Router} from "express";
import passport from 'passport';

const router=Router();

 //let's make a middleware to validate 
 const validatelogin=(req, res,next) => {
    //if user exist
    req.user?next():res.sendStatus(401)//401 mean unauthorize
}

//set middlware before login session 
router.get("/login/success",validatelogin,(req,res)=>{
    console.log("user email:"+req.user.displayName)
    if(req.user){
        res.status(200).json({
            error:false,
            msg:"successfully login",
            user:req.user,
            //cookies:req.cookies
            //jwt
           
        })
       
        console.log("authorized")
    }else{
        res.status(403).json({error:true,msg:"user not authorized"})
        console.log("unauthorized")
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
    successRedirect:'http://localhost:3000/profile',
    failureRedirect:'/login/failed'
})
)

router.get('/logout',(req,res)=>{
    req.logout((err)=>{
       if(err) throw err;
       else{
        req.session.destroy();
        res.redirect("/");
       } 
})

    res.redirect('http://localhost:3000')
})

export default router;