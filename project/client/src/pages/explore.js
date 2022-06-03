import React from 'react';
//to receive the send data from navigated page we use this hook 
import { useLocation } from 'react-router-dom';

const Explore=()=>{
    const book=useLocation().state.book;
    console.log(book);
    return (
        <div 
            style={{
                display:'flex', 
                flexDirection:'column',//flex wrap is for if display is full then go to the down 
                padding:"20px",
                boxShadow:"0px 0px 5px #ccc",
                marginLeft:"20px",
                marginTop:"20px",
                cursor:"pointer"
                }}>
                <img 
                src={book.image}
                alt="book"
                style={{height:"200px",weidth:"200px",objectFit:'contain'}}
                />
                <br/>
                Book:
               <small>{book.name}</small> 
                <br/>
                Author:
               <small>{book.author}</small> 
                <br/>
                Description:
                <small>{book.description}</small>
                </div>
    )
    
}

export default Explore;