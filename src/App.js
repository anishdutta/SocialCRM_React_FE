import React, { useState } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import Header from "./components/Header";
import Index from "./pages/Index";
import SideBar from "./components/SideBar";
// import { useState } from "react";
import Post from "./pages/Post";
import Newpost from "./pages/Newpost";
import Marketing from "./pages/Marketing";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [user, setUser] = useState(null);

  return (
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
            <Route path="/login" exact render={() => <Login user={user}  setUser={setUser}/>} />
            <Route
              path="/signup"
              exact
              render={() => <Signup user={user} setUser={setUser} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
