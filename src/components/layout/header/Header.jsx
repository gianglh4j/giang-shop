import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { Link } from 'react-router-dom';

class Header extends Component {
    
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user, isAuthenticated } = this.props.auth;
    let button;
    if (isAuthenticated) {
      button = (
        <React.Fragment>
     <p>Hey, {user.name}</p>
        <input type="button" value="Logout" onClick={this.onLogoutClick}/>
    </React.Fragment>
        
      );
    }
    else{
        button = (
            <div>
         
            <Link to={`/login`} >Login</Link>
            </div>
          );
    }
    return <header className="site-navbar" role="banner" > {button}</header>;
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
