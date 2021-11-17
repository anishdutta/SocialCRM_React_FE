/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import Header from "./components/Header";
import Index from "./pages/Index";
// import { useState } from "react";
// import Post from "./pages/Post";
import Facebook from "./pages/Facebook";
import Linkedin from "./pages/Linkedin";
import Newpost from "./pages/Newpost";
import Marketing from "./pages/Marketing";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase";
// import { useCookies } from "react-cookie";

function App() {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  if (user) {
    localStorage.setItem("dbuseruid", user.uid);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log(user);
      } else {
        console.log("no user");
      }
    });
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column">
        <Header user={user} />
        <div className="main container-fluid">
          <Switch>
            <Route path="/" exact render={() => <Index />} />
            {user && (
              <>
                <Route path="/facebook" exact render={() => <Facebook />} />
                <Route path="/instagram" exact render={() => <Facebook />} />
                <Route path="/linkedin/" render={() => <Linkedin />} />
                <Route path="/newpost" exact render={() => <Newpost />} />
                <Route path="/marketing" exact render={() => <Marketing />} />
                <Route path="/chat" exact render={() => <Chat />} />
                <Route path="/chat/:id" exact render={() => <Chat />} />
              </>
            )}
            <Route
              path="/login"
              exact
              render={() => <Login user={user} setUser={setUser} />}
            />
            <Route
              path="/signup"
              exact
              render={() => <Signup user={user} setUser={setUser} />}
            />

            <Route path="*" render={() => <h1>Page Not Found</h1>}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
