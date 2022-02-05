
import "./App.css";
import Home from "./View/Home";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Signin from "./View/Authentication/Signin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>

<Routes>

      <Route path="/" element={<Home/>} exact />
      <Route path="/signin" component={Signin} />
    </Routes>
   
    
    
    </>
   
  );
}
export default App;

