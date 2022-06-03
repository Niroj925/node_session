import React from "react";
import {useState}from "react";
import "../assets/sass/form.scss";
import api from '../api/config.js';
//tost is for notification box
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddBook=()=>{
    const[formData,setFormdata]=useState({});
    const[imageData,setImageData]=useState();

    const handlechange=(e)=>{
       
        setFormdata({...formData,[e.target.name]:e.target.value});
    }

    //send data from client to server through api
    
    const addBook=async(e)=>{
        e.preventDefault();
        try{
      const response= await api.post('/book/add',{
            //spliting our data 
          ...formData,
          image:imageData
        },
        { 
            headers:{
                "Content-Type": "multipart/form-data",
            }
        }

        );
        if(response.data.id){
        console.log(response);
        console.log("success");
        toast.success("Added a new book");
        //to reset our form
        e.target.reset();
        setFormdata({});
        setImageData();
        //for topup notification box
        
        }else{
            toast.error(response.data.message)
        }
    }catch(e){
     console.log(e);
     toast.error(e.message);
    }
        
    }


    return (
        <div style={{display: 'flex', justifyContent: 'center'}} >
            
             <ToastContainer />
    <form 
    style={
        {
            display: "flex",
        flexDirection: "column"
    }}
    onSubmit={addBook}
    >
        Book Name:
        <input type="text" name="name" onChange={handlechange}></input>
        Author Name:
        <input type="text" name="author" onChange={handlechange}></input>
        Description:
        <textarea name="description" rows="7" onChange={handlechange}></textarea>
        Select Image:
        <input 
        type="file" 
        name="image"
         onChange={(e)=>setImageData(e.target.files[0])}
         ></input>
        <input type='submit' value="Submit" ></input> 
    </form>
        </div>
   
    )
}

export default AddBook;