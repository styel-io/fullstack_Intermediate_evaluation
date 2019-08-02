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
// https://gist.github.com/hartzis/0b77920380736f98e4f9

const Add = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <Fragment>
      <Form // 이벤트가 발생하면 프리벤트 디폴트를 하고 addPost에 text값을 담아 전달하고, 다시 입력칸을 빈 값으로 바꾼다.
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        {/* 이미지 파일 삽입 */}

        <Form.Field>
          <input type="file" required />
        </Form.Field>
        {/* 텍스트 필드 */}
        <Form.Field
          control={TextArea}
          name="text"
          placeholder="Write..."
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        {/* submit 버튼 */}
        <Button type="submit" primary>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

Add.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(Add);
