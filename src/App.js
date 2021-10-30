import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import SideBar from "./components/SideBar";
import { useState } from "react";
import Post from "./pages/Post";

function App() {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="main container-fluid">
        <Switch>
          <Route path="/" exact render={() => <Index />} />
          <Route path="/post" exact render={() => <Post />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
