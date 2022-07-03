import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from "../config/firebase.js"

const addUser=async(obj)=>{
try {
    const docRef = await addDoc(collection(db, "users"),
    //   first: "Ada",
    //   last: "Lovelace",
    //   born: 1815
    obj
    
  );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const getUser=async()=>{
    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  console.log(`${doc}`);
});
}


export {addUser,getUser};
