import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Image, Grid, Icon, Input } from "semantic-ui-react";
import "../styles/containers/FeedBox.css";

// import FeedTextBox from "../components/FeedTextBox";

function FeedBox({ auth: { user } }) {
  return (
    <Fragment>
      <Grid stackable centered className="feedBox">
        <Grid.Column
          width={10}
          className="feedBox_image-container"
          verticalAlign="top"
        >
          <Image
            src="https://elasticbeanstalk-us-east-1-316780406076.s3.amazonaws.com/4efdd2f969559e8b1c92e99f32ded48e130435.png"
            centered
          />
        </Grid.Column>
        <Grid.Column width={6} className="FeedBox_info-container">
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
                <a>#styel</a> &nbsp;<a>#test</a> &nbsp;<a>#good</a>
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
          <Grid.Row className="FeedBoxInputReply" verticalAlign="bottom">
            <Grid>
              <Grid.Row>
                <Grid verticalAlign="middle" className="FeedBox_like-box">
                  <Grid.Column width={2}>
                    <Icon name="heart outline" size="large" />
                  </Grid.Column>
                  <Grid.Column width={13}>
                    <Icon name="share alternate" size="large" />
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Icon name="bookmark outline" size="large" />
                  </Grid.Column>
                </Grid>
              </Grid.Row>
              <Grid.Row>
                <Input
                  transparent
                  placeholder="Add a comment"
                  className="FeedBox_comment-box"
                />
              </Grid.Row>
            </Grid>
          </Grid.Row>
        </Grid.Column>
      </Grid>

      <Grid className="feedSpace feedBox" />

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
