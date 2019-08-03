import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Image, Button } from "semantic-ui-react";

import { getCurrentProfile } from "../actions/profile";

import ProfileAvatar from "../components/profile/ProfileAvatar";
import EditProfileButton from "../components/profile/EditProfileButton";
import ProfileStatus from "../components/profile/ProfileStatus";
import ProfileEtcMenu from "../components/profile/ProfileEtcMenu";

import "../styles/containers/ProfileInfo.css";

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
        <Grid>
          <Grid.Column width={6}>
            <ProfileAvatar />
          </Grid.Column>
          <Grid.Column width={10}>
            <h3 className="Profile__username">{user.name}</h3>
            <EditProfileButton />
            <ProfileEtcMenu />
            <ProfileStatus />
          </Grid.Column>
        </Grid>
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
