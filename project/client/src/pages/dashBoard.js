import React ,{useEffect,useState} from "react";
import api from "../api/con.js";

const DashBoard=()=>{
     //to store fetched data we use useState hook
  const[bookList, setBooklist]=useState([]);
  //fetching through api
      useEffect(()=>{
          async function getBook(){
              const res=await api.post('/auth');
              console.log(res);
              //if any data found then store into the setBooklist
              setBooklist(res.data);
          }
          //call function
          getBook();
      },[]);//[] is return empty if not found
      //lets  map the data
    return <div>Dashboard</div>
}

export default DashBoard;