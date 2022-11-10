import{object,string} from "yup";


const loginSchema=object({ 
    email:string().email().required(),
    password:string().required().min(8),

})
const signupSchema=object({ 
    username:string().required(),
    email:string().email().required(),
    password:string().required().min(8),

})
const logoutSchema=object({ 
    email:string().email().required(),
    input:string().required().min(8),

})

export {loginSchema,signupSchema,logoutSchema};