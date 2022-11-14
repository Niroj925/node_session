import React from 'react'
import {Link} from 'react-router-dom';
import {Formik} from 'formik';
import Textfield from '../textField';
import {signupSchema} from '../userSchema/userLoginschema';

function signup() {
    const googleAuth=()=>{
        window.open(
            `${process.env.BASE_URL_API}/auth/google`,
            "_self"
        )
    }
  return (
    <div className="contianer">
      <h1>SignUp Form</h1><br/>
<Formik 
      initialValues={{email:"", password:""}}

      onSubmit={(data)=>{
        console.log('form submitted');
        console.log(data)
      }}

      validationSchema={signupSchema}
      >
        {({error,handleChange,handleSubmit,values})=>{
           return (
            <form onSubmit={handleSubmit}>
                <h1>Create an Account</h1><br/>
                <label>Username:</label><br/>
              <Textfield type="text" name="username" values=''/> <br/>  
              <label>Email:</label><br/>
              <Textfield type="email" name="email" values=''/> <br/>
              <label>Password:</label><br/>
              <Textfield type="password" name="password" values=''/><br/>
              <button type="submit">Sign Up</button>
              <p className='text'>or</p>
              <button className='google_auth' onClick={googleAuth}>
                <span>sign up with google</span>
              </button>
             <p>
                Already Have Account?<Link to='/login'>Log in</Link>

             </p>
            </form>
           )
        }}

      </Formik>
    </div>
  )
}

export default signup
