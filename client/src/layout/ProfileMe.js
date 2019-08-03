import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getCurrentProfile } from "../actions/profile";

// containers
import ProfileInfo from "../containers/ProfileInfo";

// css
import "../styles/Profile.css";

const ProfileMe = ({ getCurrentProfile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return <ProfileInfo />;
};

ProfileMe.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { getCurrentProfile }
)(ProfileMe);
