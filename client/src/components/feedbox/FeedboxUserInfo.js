import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Image, Grid, Icon } from "semantic-ui-react";
import "../../styles/components/feedbox/FeedboxUserInfo.css";

const FeedboxUserInfo = ({ user }) => {
  return (
    <Grid.Row className="FeedBox_user-info" verticalAlign="top">
      <Grid verticalAlign="middle">
        <Grid.Column width={2}>
          <Image src={user.avatar} avatar size="mini" />
        </Grid.Column>
        <Grid.Column width={13}>
          <h3 className="FeedBox_username">{user.name}</h3>
        </Grid.Column>
        <Grid.Column width={1}>
          <Icon name="ellipsis horizontal" size="large" />
        </Grid.Column>
      </Grid>
    </Grid.Row>
  );
};

FeedboxUserInfo.propTypes = {
  user: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  user: state.auth.user
});
export default connect(mapStateToProps)(FeedboxUserInfo);
