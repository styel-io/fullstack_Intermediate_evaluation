import React, { Component, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import { loadUser } from "../actions/auth";
import axios from "axios";
import { Icon, Image, Button } from "semantic-ui-react";

import { getCurrentProfile } from "../actions/profile";

// components
import LoadMoreButton from "../components/LoadMoreButton";
import NewPostModal from "../components/NewPostModal";
import NewPostButton from "../components/NewPostButton";
import ConfirmationModal from "../components/ConfirmationModal";

// containers
import ProfileInfo from "../containers/ProfileInfo";
import PhotoGrid from "../containers/PhotoGrid";
import NotificationCardsContainer from "../containers/NotificationCardsContainer";

// css
import "../styles/Profile.css";

const ProfileMe = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <div>
      <ProfileInfo />
      {/* <PhotoGrid />
      <LoadMoreButton />
      <NotificationCardsContainer />
      <NewPostButton />
      <NewPostModal />
      <ConfirmationModal />
      {this.renderUsersModal()} */}
    </div>
  );
};

ProfileMe.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(ProfileMe);
