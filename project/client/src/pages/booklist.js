import React ,{useEffect} from "react";
import api from '../api/config';

const bookList=()=>{
 useEffect(()=>{
    async function getBook(){
        const res=await api.get('/book');
        console.log(res);
    }

    getBook();
},[])
    return <div>this is a booklist</div>
}

export default bookList;