import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../../store/Actions/TestActions";
import Users from "../../components/Users";
import "../../App.css";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  

  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/signin";
  };
  return (
  <>
    <h1>React Protected Routes</h1>
      <h2>Welcome to the Homepage / Landing page</h2>
      <button className="btn btn-primary" >
        Logout
      </button>
     
<Users />
    
  
  </>
   

    
  );
}

export default Home;

