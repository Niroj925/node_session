import React from 'react'
import {Link} from 'react-router-dom';
import {Formik} from 'formik';
import Textfield from '../textField';
import {signupSchema} from '../userSchema/userLoginschema';

function Home(userDetails) {
    const user=userDetails.user;

    const logout=()=>{
        window.open(
            `${process.env.BASE_URL_API}/auth/logout`,
            "_self"
        )
    }
  return (
    <div className="contianer">
      <h1>Home Page</h1><br/>
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
                <h1>Profile</h1><br/>
              <label>Email:</label><br/>
              <Textfield type="email" name="email" defaultValues={user.name}/> <br/>
              <label>Password:</label><br/>
              <Textfield type="text" name="input" values={user.input}/><br/>
              <button type='submit' className='google_auth' onClick={logout}>
               Log Out
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

export default Home
