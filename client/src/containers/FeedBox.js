import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Image, Grid, Icon } from "semantic-ui-react";

// import FeedTextBox from "../components/FeedTextBox";

function FeedBox({ auth: { user } }) {
  return (
    <Fragment>
      <Grid stackable>
        <Grid.Column width={10}>
          <Image src="https://elasticbeanstalk-us-east-1-316780406076.s3.amazonaws.com/4efdd2f969559e8b1c92e99f32ded48e130435.png" />
        </Grid.Column>
        <Grid.Column width={6}>
          <Grid.Row>
            <Grid>
              <Grid.Column width={3}>
                <Image src={user.avatar} avatar size="mini" />
              </Grid.Column>
              <Grid.Column width={10}>
                <h3>{user.name}</h3>
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="ellipsis horizontal" size="large" />
              </Grid.Column>
            </Grid>
          </Grid.Row>
          <Grid.Row>나 옷 잘입었죠? 최고죠? 존니 멋지지? 인지용?</Grid.Row>
          <Grid.Row>text</Grid.Row>
          <Grid.Row>text</Grid.Row>
        </Grid.Column>
        <div className="feedSpace" />
      </Grid>

      <div>
        <div className="feedBox">
          <div className="feedImage">
            <Image src="https://elasticbeanstalk-us-east-1-316780406076.s3.amazonaws.com/3fb5ed13afe8714a7e5d13ee506003dd175210.png" />
          </div>

          <div className="feedContent">
            <div>info</div>
          </div>
        </div>
        <div className="feedSpace" />
      </div>

      <div>
        <div className="feedBox">
          <div className="feedImage">
            <Image src="https://elasticbeanstalk-us-east-1-316780406076.s3.amazonaws.com/84e3341f7bc8e1ad7daf229537eae2c0160207.png" />
          </div>
          <div className="feedContent">
            <div>info</div>
          </div>
        </div>
        <div className="feedSpace" />
      </div>
    </Fragment>
  );
}

FeedBox.propTypes = { auth: PropTypes.object.isRequired };

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(FeedBox);
