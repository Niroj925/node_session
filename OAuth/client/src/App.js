import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Navigate} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Home from "./pages/Logout";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

function App() {
  const [user,setUser]=useState(null);
  const getUser=async ()=>{
    try{
    const url='http://localhost:8080/OAuth/login/success'
   const {data}= await axios.get(url,{withCredentials:true});
   setUser(data.user._Json);
   console.log(data);
  }catch(err){
    console.log(err);
  }
}

useEffect(()=>{
  getUser();
},[])
  return (
    <div classnName="container">
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

</Routes>
</Router>
    </div>
  )
}

export default App