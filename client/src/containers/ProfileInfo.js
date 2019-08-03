import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUser } from "../actions/auth";

import { getCurrentProfile } from "../actions/profile";

import { Icon, Image, Button } from "semantic-ui-react";

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
          <div className="Profile__avatar-img-wrapper">
            <img
              src={user.avatar}
              className="Profile__avatar-img"
              alt={`${user.name} profile`}
            />
          </div>
        </div>
        <div className="five columns">
          <h3 className="Profile__username">{user.name}</h3>
          <Button>Edit Profile</Button>
          <Icon name="cog" size="big" />
          <div className="Profile__stats">
            <div className="Profile__stats-item">
              <span className="Profile__stats-count">
                {/* 포스트 개수 시작 */}
                {/* {user.postIds.length} */} 20
              </span>{" "}
              {/* {pluralize(user.postIds.length, "post", "posts")} */}
              posts
            </div>
            <div
              className="Profile__stats-item Profile__stats-item--link"
              onClick={() => this._openUsersModal("followers")}
            >
              <span className="Profile__stats-count">
                {/* {user.followersCount} */} 10
              </span>{" "}
              {/* {pluralize(user.followersCount, "follower", "followers")} */}{" "}
              followers
            </div>
            <div
              className="Profile__stats-item Profile__stats-item--link"
              onClick={() => this._openUsersModal("following")}
            >
              <span className="Profile__stats-count">
                {/* {user.followingCount} */}56
              </span>{" "}
              {/* {pluralize(user.followingCount, "following", "following")} */}{" "}
              following
            </div>
          </div>
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
