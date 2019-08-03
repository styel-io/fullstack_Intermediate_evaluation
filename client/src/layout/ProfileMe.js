import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// components
// import LoadMoreButton from "../components/LoadMoreButton";
// import NewPostModal from "../components/NewPostModal";
// import NewPostButton from "../components/NewPostButton";
// import ConfirmationModal from "../components/ConfirmationModal";

import { getCurrentProfile } from "../actions/profile";

// containers
import ProfileInfo from "../containers/ProfileInfo";
// import PhotoGrid from "../containers/PhotoGrid";
// import NotificationCardsContainer from "../containers/NotificationCardsContainer";

// css
import "../styles/Profile.css";

const ProfileMe = ({ getCurrentProfile }) => {
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
  getCurrentProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { getCurrentProfile }
)(ProfileMe);
