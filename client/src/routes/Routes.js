import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import Alert from "../layout/Alert";

import CreateProfile from "../components/profile-forms/CreateProfile";
import EditProfile from "../components/profile-forms/EditProfile";
import Profiles from "../components/profiles/Profiles";

import Posts from "../components/posts/Posts";
import Post from "../components/post/Post";
import AddPost from "../components/posts/AddPost";
import NotFound from "../layout/NotFound";
import PrivateRoute from "./PrivateRoute";
import Upload_file from "../layout/Upload_file";

import Profile from "../layout/Profile";
import ProfileMe from "../layout/ProfileMe";
import Add from "../components/posts/Add";

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        <PrivateRoute exact path="/create-profile" component={CreateProfile} />

        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/add_post" component={AddPost} />

        {/* Profile */}
        <Route exact path="/profiles" component={Profiles} />
        <PrivateRoute exact path="/pf/:id" component={ProfileMe} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />

        <PrivateRoute exact path="/posts/:id" component={Post} />
        <PrivateRoute exact path="/upload_file" component={Upload_file} />
        <PrivateRoute exact path="/add" component={Add} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
