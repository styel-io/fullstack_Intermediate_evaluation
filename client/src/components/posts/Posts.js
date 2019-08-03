import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../layout/Spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import ImageUpload from "./ImageUpload";
import { getPosts } from "../../actions/post";
import {} from "semantic-ui-react";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div>
        <div className="feedBox">
          <div className="feedImage">이미지 업로드</div>
          <ImageUpload />
          <div className="feedContent">
            <div>이미지 필터</div>
          </div>
        </div>
      </div>

      <PostForm />
      <div>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
