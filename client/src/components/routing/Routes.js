import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../../layout/Alert";

import CreateProfile from "../profile-forms/CreateProfile";
import EditProfile from "../profile-forms/EditProfile";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import AddPost from "../posts/AddPost";
import NotFound from "../../layout/NotFound";
import PrivateRoute from "./PrivateRoute";
import Upload_file from "../../layout/Upload_file";
import ProfileMe from "../../layout/ProfileMe";
import Add from "../posts/Add";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />

        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/add_post" component={AddPost} />
        <PrivateRoute exact path="/pf/me" component={ProfileMe} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <PrivateRoute exact path="/upload_file" component={Upload_file} />
        <PrivateRoute exact path="/add" component={Add} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
