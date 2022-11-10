import React from 'react'
import {Link} from 'react-router-dom';
import {Formik} from 'formik';
import Textfield from '../textField';
import {loginSchema} from '../userSchema/userLoginschema';
import axios from 'axios';

function login() {
    const googleAuth=()=>{
        window.open(
            "http://localhost:8080/OAuth/auth/google",
            "_self"
        )
    }
const check=async()=>{
  const {data}=await axios.get("http://localhost:8080/OAuth/auth")
  console.log(data);
}
  return (
    <div classnName="contianer">

<Formik 
      initialValues={{email:"", password:""}}

      onSubmit={(data)=>{
        console.log('form submitted');
        console.log(data)
      }}

      validationSchema={loginSchema}
      >
        {({error,handleChange,handleSubmit,values})=>{
           return (
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1><br/>
              <label>Email:</label><br/>
              <Textfield type="email" name="email" values=''/> <br/>
              <label>Password:</label><br/>
              <Textfield type="password" name="password" values=''/><br/>
              <input type="submit"/>
              <p className='text'>or</p>
              <button classnName='google_auth' onClick={googleAuth}>
                <span>sign in with google</span>
              </button>
             <p>
                New Here?<Link to='/signup'>Sign Up</Link>

             </p>
            </form>
           )
        }}

      </Formik>

      <button onClick={check}>check</button>
    </div>
  )
}

export default login
