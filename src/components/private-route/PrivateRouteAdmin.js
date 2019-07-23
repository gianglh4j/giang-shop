import React from "react";
import { Route ,Redirect} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
const PrivateRouteAdmin = ({ component: Component, auth,logoutUser, ...rest }) => (
  <Route
    {...rest}
    render={props => 
      <React.Fragment>
      {auth.isAuthenticated === true && auth.user.name === 'giang' && <Component {...props} />  }
      {auth.isAuthenticated === true && auth.user.name !== 'giang' && <React.Fragment>
        <h1>Bạn không đủ quyền truy cập vào trang này, hãy logout và login lại bằng tài khoản quyền cao hơn</h1>
        <input type="button" value="Logout" onClick={logoutUser}/>
         </React.Fragment> } 
      {auth.isAuthenticated === false && <Redirect to="/login"/>}
      </React.Fragment>
    }
  />
);
PrivateRouteAdmin.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps,{ logoutUser })(PrivateRouteAdmin);