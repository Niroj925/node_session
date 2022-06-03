import React,{useEffect, useState}from "react";
import api from "../api/config";
import { useNavigate } from "react-router-dom";

//display our data from db through api
const Homepage=()=>{
    const[bookList, setBooklist]=useState([]);
    //to store temporarly we can make sure
    const [tempbookList,tempsetBooklist]=useState([]);//[] mean store many datas in an array form
    //this is for input text fields
    const [searchText, setSearchText]=useState("");

    const navigate=useNavigate();
//fetching through api
    useEffect(()=>{
        async function fetchdata(){
            const res=await api.get('/book');
            //console.log(res.data);
            setBooklist(res.data);
            //to reuse after clear some data 
            tempsetBooklist(res.data);
        }
        //call function
        fetchdata();
    },[]);//[] is return empty if not found

    useEffect(()=>{
        async function searchBooks(){
           
            //url of the backend
            const response=await api.get(`/book/search/all?find=${searchText}`);//find is a query variable name
            if(response.data){
             console.log(response.data);
             setBooklist(response.data);
            }
        }
        //search if some text
        if(searchText){//is booklist found set searchlist book
             searchBooks();
        }else{//if nothing in search list then we can 
          setBooklist(tempbookList);
        }
       
    },[searchText])
    
    return (
       <div>
           <center>
               <input
               type="text"
               placeholder="search your books..."
               style={{
                   width:"50%",
                   margin:"20px",
                   padding:"10px"

               }}
               //to take input text from search bar
               value={searchText}
               onChange={(e)=>setSearchText(e.target.value)}
               />
           </center>
    <div 
    style={{
        display:'flex', //
        flexWrap:'wrap',
        alignItems: "center",
        justifyContent:"center",
        }}>
            
        {bookList.length>0? bookList.map((book,index)=>{//if searchbook list greater than 0 onlyy search else send msg
            return <div 
            //to navigate if click the 
            onClick={()=>navigate('/explore',{
                //let's pass the data to the navigated link
                state:{
                 book,
                }
            }
            )}
            key={index} 
            style={{
                display:'flex', 
                flexDirection:'column',//flex wrap is for if display is full then go to the down 
                justifyContent: 'center', 
                textAlign: 'center',
                padding:"20px",
                boxShadow:"0px 0px 5px #ccc",//to make card like box
                marginLeft:"20px",
                marginTop:"20px",
                cursor:"pointer"
                }}>
                <img 
                src={book.image}
                alt="book"
                style={{height:"200px",weidth:"200px",objectFit:'contain'}}
                />
                {book.name}
                </div>
        }):"No Books found"//this is ternary operator for book search
    }
    </div>
    </div>
    );
}


export default Homepage;