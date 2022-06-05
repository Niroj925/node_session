import React ,{useEffect,useState} from "react";
import api from '../api/config';
import {FaTrashAlt} from "react-icons/fa";//for react icon
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//display our data from db through api

const Booklist=()=>{
  //to store fetched data we use useState hook
  const[bookList, setBooklist]=useState([]);
//fetching through api
    useEffect(()=>{
        async function getBook(){
            const res=await api.get('/book');
            console.log(res);
            //if any data found then store into the setBooklist
            setBooklist(res.data);
        }
        //call function
        getBook();
    },[]);//[] is return empty if not found
    //lets  map the data 

    //let's make a function to delete 
    const deletBook=async(id,idx)=>{
        const data=window.confirm('Do you want to delet ?');
        if(data){
            try{
            const res=await api.delete(`/book/delete/${id}`);
            console.log(res);
             if(res.data.success){
                 //to  reset the booklist after deleted
                 //that means set lilst all else current delte idx
                 const newBooklist=bookList.filter((book,index)=>index!==idx);
                 setBooklist(newBooklist);

             console.log('book deleted successfully');
             toast.success("Book has been deleted successfully");
        }else{
            console.log('unable to delet book');
            toast.error("Unable to delete book");
        }
        }   
      catch(e){
        console.log(e.message)
        toast.error(e.message);
    }  
    }
    }
   return(
       <center>
           <ToastContainer />
     <div>
         {
       (bookList.length>0)? bookList.map((book,index)=>{
           return <div
           key={index}
           style={{
               boxShadow:"0px 0px 5px #ccc",
               padding:"15px",
               marginBottom:"10px",
               width:"40%",
               color:"green", 
               textAlign:"start",
               display:"flex",
               justifyContent:"space-between",
               
           }}
           >{book.name}
           <FaTrashAlt 
           color="red" style={{cursor:'pointer'}}
               //id is to delet book from db and index is delet from current client page
           onClick={()=>deletBook(book.id,index)}
       
           />
           </div>
       }):'No Books available'
       }
         </div>  
         </center>
   ) 
}
export default Booklist;