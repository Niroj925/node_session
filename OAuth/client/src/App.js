import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Navigate} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Home from "./pages/Logout";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {
  const [user,setUser]=useState(null);
  const getUser=async ()=>{
    try{
    const url='http://localhost:8080/auth/login/success'
   const {data}= await axios.get(url,{withCredentials:true});
   setUser(data.user._Json);
   console.log(data);
   console.log("user:"+user);
  }catch(err){
    console.log(err);
  }
}

useEffect(()=>{
  getUser();
},[])
  return (
    <div className="container">
      <Router>
<Routes>
  <Route
  exact
  path='/'
  element={user?<Home user={user}/>:<Navigate to='/login'/>}
  />
  <Route
  exact
  path='/login'
  element={user?<Navigate to='/'/>:<Login/>}
  />
 <Route
  exact
  path='/signup'
  element={user?<Navigate to='/'/>:<SignUp/>}
  />  
  <Route
  exact
  path='/profile'
  // element={user?<Profile/>:<Navigate to='/'/>}
  element={<Profile/>}
  />

</Routes>
</Router>
    </div>
  )
}

export default App