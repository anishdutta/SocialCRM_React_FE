import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import Header from "./components/Header";
import Index from "./pages/Index";
import SideBar from "./components/SideBar";
// import { useState } from "react";
import Post from "./pages/Post";
import Newpost from "./pages/Newpost";
import Marketing from "./pages/Marketing";

function App() {
  return (
<<<<<<< Updated upstream
    <div className="d-flex flex-column">
      <SideBar />
      <div className="main container-fluid">
        <Switch>
          <Route path="/" exact render={() => <Index />} />
          <Route path="/post" exact render={() => <Post />} />
          <Route path="/newpost" exact render={() => <Newpost />} />
          <Route path="/marketing" exact render={() => <Marketing />} />
        </Switch>
=======
    <Router>
      <div className="d-flex flex-column">
        <SideBar />

        <div className="main container-fluid">
          <Switch>
            <Route path="/" exact render={() => <Index />} />
            <Route path="/post" exact render={() => <Post />} />
            <Route path="/newpost" exact render={() => <Newpost />} />
            <Route path="/marketing" exact render={() => <Marketing />} />
            <Route path="/chat" exact render={() => <Chat />} />
          </Switch>
        </div>
>>>>>>> Stashed changes
      </div>
    </Router>
  );
}

export default App;
