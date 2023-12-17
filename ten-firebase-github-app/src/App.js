import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// react-router
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";


//ToastContainer
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//firebase
import firebase from "firebase/compat/app"
import 'firebase/compat/auth' 
//due to firebase v9 use /compat

//Components
import Home from "./Pages/Home"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import PageNotFound from "./Pages/PageNotFound"

import {UserContext} from "./Context/UserContext"
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseConfig from "./Config/firebaseconfig";
//init firebase
firebase.initializeApp(firebaseConfig);


const App = () => {

  const [user, setUser] = useState();

  
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} /> 
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
