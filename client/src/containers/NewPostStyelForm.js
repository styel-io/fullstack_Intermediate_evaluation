import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPostStandby } from "../actions/post";

import { Grid, Form, Input, TextArea } from "semantic-ui-react";

const NewPostStyelForm = ({
  addPostStandby,
  standby: { imageurl, styel, text, location }
}) => {
  const [styel, setStyel] = useState(styel);
  const [text, setText] = useState(text);
  const [location, setLocation] = useState(location);
  const [imageurl, setImageurl] = useState(imageurl);

  return (
    <Form
      className=""
      onSubmit={e => {
        e.preventDefault();
        addPostStandby(this.state);
        setStyel("");
      }}
    >
      <Grid stackable centered className="NewPostBox">
        <Grid.Column width={10}>
          <Image src={imageurl} />
        </Grid.Column>
        <Grid.Column width={6} className="NewPostForm">
          {/* <NewPostForm /> */}{" "}
          <Form.Field
            control={TextArea}
            placeholder="Let's Styel"
            name="text"
            value={styel}
            onChange={e => setStyel(e.target.value)}
            required
          />
        </Grid.Column>
      </Grid>
    </Form>
  );
};
NewPostStyelForm.propTypes = {
  standby: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  standby: state.post.standby
});

export default connect(
  mapStateToProps,
  { addPostStandby }
)(NewPostStyelForm);
