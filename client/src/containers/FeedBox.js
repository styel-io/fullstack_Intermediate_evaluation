import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Image, Grid } from "semantic-ui-react";
import "../styles/containers/FeedBox.css";

import FeedBoxUserInfo from "../components/feedbox/FeedboxUserInfo";
import FeedBoxActionBox from "../components/feedbox/FeedBoxActionBox";
import FeedBoxImageContainer from "../components/feedbox/FeedBoxImageContainer";
import FeedBoxCaption from "../components/feedbox/FeedBoxCaption";

function FeedBox({ auth: { user } }) {
  return (
    <Fragment>
      <Grid stackable centered className="feedBox">
        <FeedBoxImageContainer />
        <Grid.Column width={6} className="FeedBox_info-container">
          <FeedBoxUserInfo />
          <FeedBoxCaption />
          <FeedBoxActionBox />
        </Grid.Column>
      </Grid>
      <Grid className="feedSpace " />

      <Grid stackable centered className="feedBox">
        <Grid.Column
          width={10}
          className="feedBox_image-container"
          verticalAlign="top"
        >
          <Image
            src="https://elasticbeanstalk-us-east-1-316780406076.s3.amazonaws.com/3fb5ed13afe8714a7e5d13ee506003dd175210.png"
            centered
          />
        </Grid.Column>
        <Grid.Column width={6} className="FeedBox_info-container">
          <FeedBoxUserInfo />
          <FeedBoxCaption />
          <FeedBoxActionBox />
        </Grid.Column>
      </Grid>
      <Grid className="feedSpace " />

      <Grid stackable centered className="feedBox">
        <Grid.Column
          width={10}
          className="feedBox_image-container"
          verticalAlign="top"
        >
          <Image
            src="https://styel.s3.ap-northeast-2.amazonaws.com/84e3341f7bc8e1ad7daf229537eae2c0160207.png"
            centered
          />
        </Grid.Column>
        <Grid.Column width={6} className="FeedBox_info-container">
          <FeedBoxUserInfo />
          <FeedBoxCaption />
          <FeedBoxActionBox />
        </Grid.Column>
      </Grid>
      <Grid className="feedSpace " />
    </Fragment>
  );
}

FeedBox.propTypes = { auth: PropTypes.object.isRequired };

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(FeedBox);
