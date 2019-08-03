import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";

const ProfileDetail = ({ getCurrentProfile, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  console.log(profile);
  return (
    <div>
      <div>love ethereum</div>
      <div>{profile.website}</div>
    </div>
  );
};

ProfileDetail.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(ProfileDetail);
