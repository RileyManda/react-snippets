import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom';
import React from 'react';
// layouts


import ProtectedRoute from './components/ProtectedRoute';
import Home from './View/Home';
import Signin from './View/Authentication/Signin';
// ----------------------------------------------------------------------
export default function routes() {
  return (
    [
      {
        path: '/',
        element: <Signin />,
        children: [ 
          { path: '/', element: <Navigate to="/signin" /> },
          { path: 'home', component: <Home /> },
  
        ]
      },
  

    ]
   
 
    

  );
}