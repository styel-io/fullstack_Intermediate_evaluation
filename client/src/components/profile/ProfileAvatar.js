import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Icon, Image, Button } from "semantic-ui-react";

import "../../styles/profile/ProfileAvatar.css";

const ProfileAvatar = ({ auth: { user }, profile }) => {
  return (
    <div className="Profile__avatar-img-wrapper">
      <Image
        src={user.avatar}
        className="Profile__avatar-img"
        alt={`${user.name} profile`}
      />
    </div>
  );
};

ProfileAvatar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps)(ProfileAvatar);
