import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../actions/post";

import Spinner from "../layout/Spinner";

// containers
import FeedBox from "../containers/FeedBox";

// css
import "../styles/Feed.css";

const Feed = ({ getPosts, post: { posts, post, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading && post === null ? <Spinner /> : <FeedBox />;
};
const mapStateToProps = state => ({
  post: state.post
});
export default connect(
  mapStateToProps,
  { getPosts }
)(Feed);
