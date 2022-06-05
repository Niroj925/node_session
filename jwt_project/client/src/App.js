import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./pages/login.jsx";
import Homepage from "./pages/dashboard.js";

function App() {
  return (
  <div >
    <Router>
    <Routes>
      <Route path='/profile' element={<Login/>}/>
      <Route path='/dashboard' element={<Homepage/>}/>
    </Routes>
    </Router>
  </div>
  
  );
}

export default App;
