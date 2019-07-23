import React, { Component } from "react";
import "./App.css";


import Footer from "./footer/Footer";
import Body from "./body/Body";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store.js";

import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../../actions/authActions";

// Check for token to keep user logged in/ xet khi load lai trang 
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
        <div className="site-wrap">
      
         
          <Body />
          <Footer />
          </div>
        </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
