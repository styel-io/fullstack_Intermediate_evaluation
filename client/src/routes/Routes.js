import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../layout/auth/Register";
import Login from "../layout/auth/Login";

import Profiles from "../components/profiles/Profiles";

import NotFound from "../layout/NotFound";
import PrivateRoute from "./PrivateRoute";

import Profile from "../layout/Profile";
import ProfileMe from "../layout/ProfileMe";
import NewPost from "../layout/NewPost";

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

        <PrivateRoute exact path="/newpost" component={NewPost} />

        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
