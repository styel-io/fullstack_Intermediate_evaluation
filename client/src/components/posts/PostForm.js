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

// 액션 값 addPost 함수를 불러온다.
const PostForm = ({ addPost }) => {
  // text 값을 state에 저장. 처음에는 빈 값.
  const [text, setText] = useState("");

  return (
    <Fragment>
      <Form
        // 이벤트가 발생하면 프리벤트 디폴트를 하고 addPost에 text값을 담아 전달하고, 다시 입력칸을 빈 값으로 바꾼다.
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <Form.Field>
          <input type="file" />
        </Form.Field>

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
