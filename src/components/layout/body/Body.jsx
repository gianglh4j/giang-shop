import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../auth/Login";
import Register from "../../auth/Register";

import PrivateRoute from "../../private-route/PrivateRoute";
import PrivateRouteAdmin from "../../private-route/PrivateRouteAdmin";
import Dashboard from "../../dashboard/Dashboard";
import Cheat from "../../pages/Cheat"
import Game from '../../pages/Game';
import("./Body.css")
  .then()
  .catch(err => console.log(err));

export default class Body extends Component {
  render() {
    return (
      
        <Switch>
          {/*<Route exact path="/" component={LifeCycleReactComponent} /> */}
          <Route exact path="/" component={Game} />
            <Route exact path="/login" component={Login} />
            <PrivateRouteAdmin exact path="/cheat" component={Cheat} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRouteAdmin exact path="/hello" component={() => <div>hello admin giang</div>} />
          <Route exact path="/jquery" render={() => <div>jquery</div>} />
          <Route exact path="/android" render={() => <div>android</div>} />
          <Route render={() => <div>404 Page Not Found</div>} />
        </Switch>
    );
  }
}
