import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import ImageUpload from "./ImageUpload";
import { Container, Menu, Icon, Image } from "semantic-ui-react";

const Posts = () => {
  return (
    <Fragment>
      <div className="imageBox">
        <div className="feedBox">
          <div className="feedImage">이미지 업로드</div>
          <ImageUpload />
          <div className="feedContent">
            <div>이미지 필터</div>
          </div>
        </div>
        <PostForm />
      </div>
    </Fragment>
  );
};

export default connect()(Posts);
