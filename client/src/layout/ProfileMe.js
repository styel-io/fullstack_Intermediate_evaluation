import React, { Component, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import { loadUser } from "../actions/auth";
import axios from "axios";
import { Icon, Image } from "semantic-ui-react";

import { getCurrentProfile } from "../actions/profile";

// components
import LoadMoreButton from "../components/LoadMoreButton";
import NewPostModal from "../components/NewPostModal";
import NewPostButton from "../components/NewPostButton";
import ConfirmationModal from "../components/ConfirmationModal";

// containers
import PhotoGrid from "../containers/PhotoGrid";
import NotificationCardsContainer from "../containers/NotificationCardsContainer";

const My_page = ({
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
          {this.renderActionButton()}
          {this.renderMenuButton()}
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
      <PhotoGrid
        posts={this.props.posts}
        maxCount={this.state.endlessScroll ? null : 9}
      />
      <LoadMoreButton
        show={this.props.pagination.nextPage && !this.state.endlessScroll}
        onClick={this.enableEndlessScroll}
      />
      <NotificationCardsContainer />
      <NewPostButton onClick={this.openNewPostModal} />
      <NewPostModal
        isOpen={this.state.newPostModalIsOpen}
        onRequestClose={this.closeNewPostModal}
      />
      <ConfirmationModal
        isOpen={this.state.logoutModalIsOpen}
        onRequestClose={this.closeLogoutModal}
        onConfirmClick={this.props.userSignOut}
        confirmText="Log out"
      />
      {this.renderUsersModal()}
    </div>
  );
};

My_page.propTypes = {
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
)(My_page);
