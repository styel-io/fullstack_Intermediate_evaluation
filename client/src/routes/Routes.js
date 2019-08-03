import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

import Profiles from "../components/profiles/Profiles";

import NotFound from "../layout/NotFound";
import PrivateRoute from "./PrivateRoute";

import Profile from "../layout/Profile";
import ProfileMe from "../layout/ProfileMe";

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        {/* Profile */}
        <Route exact path="/profiles" component={Profiles} />
        <PrivateRoute exact path="/pf/:id" component={ProfileMe} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />

        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
