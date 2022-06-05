import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Homepage from"./pages/homePage.js";
import Dashboard from "./pages/dashBoard.js";
import AddBook from "./pages/addBook.js";
import Explore from "./pages/explore.js";
import Listbook from "./pages/booklist.js";

import "./assets/sass/main.scss";


function App(){
    return (
        <Router>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/explore' element={<Explore/>}/>
      
            <Route path='/dashboard'>
                <Route index element={<Dashboard/>} />
                <Route path='addbook' element={<AddBook/>}/>
                     <Route path='booklist' element={<Listbook/>}/>

                </Route>
            
            <Route path='*' element={<div>Error 404 Page not found</div>}/>
        </Routes>
        </Router>
    )
}

export default App;