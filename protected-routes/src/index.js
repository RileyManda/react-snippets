import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./landing.page";
import { AppLayout } from "./app.layout";
import ProtectedRoute from "./protected-route";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={LandingPage} />
        {/* <ProtectedRoute  path="/app" component={AppLayout} /> */}
        <ProtectedRoute exact path='/app' component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Routes>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
