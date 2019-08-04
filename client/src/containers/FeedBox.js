import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Image, Grid } from "semantic-ui-react";
import "../styles/containers/FeedBox.css";

import FeedBoxUserInfo from "../components/feedbox/FeedBoxUserInfo";
import FeedBoxActionBox from "../components/feedbox/FeedBoxActionBox";
import FeedBoxImageContainer from "../components/feedbox/FeedBoxImageContainer";

function FeedBox({ auth: { user } }) {
  return (
    <Fragment>
      <Grid stackable centered className="feedBox">
        <FeedBoxImageContainer />
        <Grid.Column width={6} className="FeedBox_info-container">
          <FeedBoxUserInfo />
          <Grid.Row>
            <Grid className="FeedBox_caption">
              <Grid.Row>
                orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                efficitur lectus et massa fermentum viverra. Pellentesque
                accumsan dui ac augue sodales molestie. Integer malesuada
                elementum turpis in placerat. Vestibulum tincidunt dapibus leo
                imperdiet laoreet. Vivamus blandit nulla nisi, eget vulputate
                est placerat ac. Vestibulum nec venenatis libero, eget maximus
                erat. Integer quis porta lorem. Suspendisse id mauris sit amet
                ipsum ultrices vulputate vel eu enim. Aenean vehicula hendrerit
                lectus ac molestie. Praesent hendrerit ipsum luctus massa
                gravnatis libero, eget maximus erat. Integer quis porta lorem.
                Suspendisse id mauris sit amet ipsum ultrices vulputate vel eu
                enim. Aenean vehicula hendrerit lectus ac molestie. Praesent
                hendrerit ipsum luctus massa ipsum ultrices vulputate vel eu
                enim. Aenean vehicula hendrerit lectus ac molestie. Praesent
                hendrerit ipsum luctus massa gravnatis libero, eget maximus
                erat. Integer quis porta lorem. Suspendisse id mauris sit amet
                ipsum ultrices vulputate vel eu enim. Aenean vehicula hendrerit
                lectus ac molestie. Praesent hendrerit ipsum luctus massa ipsum
                ultrices vulputate vel eu enim. Aenean vehicula hendrerit lectus
                ac molestie. Praesent hendrerit ipsum luctus massa gravnatis
                libero, eget maximus erat. Integer quis porta lorem. Suspendisse
                id mauris sit amet ipsum ultrices vulputate vel eu enim. Aenean
                vehicula hendrerit lectus ac molestie. Praesent hendrerit ipsum
                luctus massa
                <a href="/">#styel</a> &nbsp;<a href="/">#test</a> &nbsp;
                <a href="/">#good</a>
              </Grid.Row>
              <Grid.Row className="FeedBox__comments">
                코멘트 박스 리드 생성
                {/* {post.comments.slice(0, 4).map(comment => (
                  <div key={comment.id} className="PostModal__comment-item">
                    <strong>{comment.username}</strong> {comment.body}
                  </div>
                ))} */}
              </Grid.Row>
            </Grid>
          </Grid.Row>
          <FeedBoxActionBox />
        </Grid.Column>
      </Grid>

      <Grid className="feedSpace " />

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
