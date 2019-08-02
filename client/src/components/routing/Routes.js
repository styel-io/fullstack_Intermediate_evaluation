import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
// import Dashboard from '../dashboard/Dashboard';
import CreateProfile from "../profile-forms/CreateProfile";
import EditProfile from "../profile-forms/EditProfile";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import ProfileMe from "../profile/ProfileMe";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import AddPost from "../posts/AddPost";
import MyPost from "../posts/MyPost";
import NotFound from "../layout/NotFound";
import PrivateRoute from "./PrivateRoute";
import Upload_file from "../layout/Upload_file";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/add_post" component={AddPost} />
        <PrivateRoute exact path="/my_post" component={MyPost} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <PrivateRoute exact path="/upload_file" component={Upload_file} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
