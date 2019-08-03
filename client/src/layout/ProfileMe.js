import React, { Component, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Icon, Image, Button } from "semantic-ui-react";

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

const ProfileMe = ({ auth: { user }, profile: { profile, loading } }) => {
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
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps)(ProfileMe);
