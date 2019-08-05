import React from "react";
import moment from "moment";

import { Image, Grid, Icon } from "semantic-ui-react";
import "../../styles/components/feedbox/FeedboxUserInfo.css";

const FeedBoxUserInfo = ({
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => {
  return (
    <Grid.Row className="FeedBox_user-info" verticalAlign="top">
      <Grid verticalAlign="middle">
        <Grid.Column width={2}>
          <Image src={avatar} avatar size="mini" />
        </Grid.Column>
        <Grid.Column width={3}>
          <h3 className="FeedBox_username">{name}</h3>
        </Grid.Column>
        <Grid.Column width={10}>
          <p className="FeedBox_dateFromNow">{moment(date).fromNow()}</p>
        </Grid.Column>
        <Grid.Column width={1}>
          <Icon name="ellipsis horizontal" size="large" />
        </Grid.Column>
      </Grid>
    </Grid.Row>
  );
};

export default FeedBoxUserInfo;
