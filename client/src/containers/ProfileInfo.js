import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Icon, Image, Button } from "semantic-ui-react";

import { getCurrentProfile } from "../actions/profile";

import ProfileAvatar from "../components/profile/ProfileAvatar";
import EditProfileButton from "../components/profile/EditProfileButton";
import ProfileStatus from "../components/profile/ProfileStatus";

const ProfileInfo = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <div className="Profile__root container">
      <div className="row Profile__user-info-container">
        <div className="four columns">
          <ProfileAvatar />
        </div>
        <div className="five columns">
          <h3 className="Profile__username">{user.name}</h3>
          <EditProfileButton />
          <Icon name="cog" size="big" />
          <ProfileStatus />
        </div>
      </div>
    </div>
  );
};

ProfileInfo.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(ProfileInfo);
