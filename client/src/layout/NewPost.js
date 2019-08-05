import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../actions/post";

import { Grid, Form, Input, TextArea } from "semantic-ui-react";

import "../styles/NewPost.css";

const NewPost = ({ addPost }) => {
  const [text, setText] = useState("");
  const [location, setLocation] = useState("");

  return (
    <Grid stackable centered className="NewPostBox">
      <Grid.Column width={10}>
        {/* <NewPostImageUpload /> */}이미지 업로드 공간
      </Grid.Column>
      <Grid.Column width={6} className="NewPostForm">
        {/* <NewPostForm /> */}{" "}
        <Form
          className="form my-1"
          onSubmit={e => {
            e.preventDefault();
            addPost({ text, location });
            setText("");
            setLocation("");
          }}
        >
          <Form.Field
            control={TextArea}
            label="Let's Styel"
            name="text"
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
          <Form.Field
            control={Input}
            label="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />

          <Form.Button content="Submit" />
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default NewPost;
