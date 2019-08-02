import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import {
  Container,
  Menu,
  Icon,
  Image,
  Button,
  Form,
  TextArea
} from "semantic-ui-react";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <Fragment>
      <Form
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <Form.Field>
          <Form.Field
            control={TextArea}
            name="text"
            cols="30"
            rows="5"
            placeholder="Create a post"
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
        </Form.Field>
        <Button type="submit" primary>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
