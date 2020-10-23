import React, { useState, useEffect } from "react";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import MainContent from "./components/MainContent/MainContent";
import Login from "./components/Login/Login";
import RegisterSetup from "./components/RegisterSetup/RegisterSetup";

import { Wizard, Steps, Step } from "react-wizr";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { auth } from "./firebase";

function App() {
  let history = useHistory();
  const [redirect, setRedirect] = useState("");
  const [registerSetup, setRegisterSetup] = useState(2);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.

        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

        // console.log(displayName);

        if (!displayName) {
          // return window.location.replace("/login/#setup"")
          // return  setRedirect("/login/#setup");
          // console.log("/login/#setup");

          setCurrent(1);

          return setRedirect("/login");
        }

        setRedirect("/");
        console.log("Signed In");
      } else {
        // User is signed out.
        setRedirect("/login");
        console.log("Not Signed In");
      }
    });
  }, []);

  const changeStep = (direction) => {
    setCurrent((current) => current + (direction === "next" ? 1 : -1));
  };
  return (
    <Router>
      <Redirect to={redirect} />

      <div className="App">
        {
          <Switch>
            <Route exact path="/login">
              {/*  */}

              <Wizard
                activeStepIndex={current}
                onStepChanged={({ activeStepIndex }) => {
                  this.setState({ activeStepIndex });
                  console.log(`Step changed: ${activeStepIndex}`);
                }}
              >
                <Steps>
                  <Step id="first">
                    <Login />
                  </Step>
                  <Step id="second">
                    <RegisterSetup />
                  </Step>
                </Steps>
              </Wizard>
              {/*  */}
            </Route>

            <Route exact path="/">
              <Navigation />
              <MainContent />
            </Route>
          </Switch>
        }
      </div>
    </Router>
  );
}

export default App;
