import React, { Component, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { load } from "../../actions/auth";
import axios from "axios";
import { Container, Menu, Icon, Image } from "semantic-ui-react";

import { getCurrentProfile } from "../../actions/profile";

const My_page = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      {console.log(user.avatar)}
      <header className="myPageHeader">
        <div className="myPageHeaderLeft">
          <div className="myPageAvatar">
            <Image src={user.avatar} circular size="small" />
          </div>
        </div>
        <section className="myPageHeaderRight">
          {/* <h2>{user.email}</h2> */}

          <div className="myPageProfile">
            <h2>{user.name}</h2>
            <a href="/Check_pass">프로필 편집</a>
            <div>
              <Icon name="cog" size="big" />
            </div>
          </div>
          <ul>
            <li>
              <span>게시물</span>
              <span>5</span>
            </li>
            <li>
              <span>팔로워</span>
              <span>68</span>
            </li>
            <li>
              <span>팔로우</span>
              <span>46</span>
            </li>
          </ul>
          <div>
            <span>소개</span>
            <a>홈페이지</a>
          </div>
        </section>
      </header>
      <div>나의 포스트 이미지 리스트</div>
    </Fragment>
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
