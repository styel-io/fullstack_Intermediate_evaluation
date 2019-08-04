import React from "react";

import { Grid } from "semantic-ui-react";
import "../../styles/components/feedbox/FeedBoxCaption.css";

function FeedBoxCaption(props) {
  return (
    <Grid.Row>
      <Grid className="FeedBox_caption">
        <Grid.Row>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          efficitur lectus et massa fermentum viverra. Pellentesque accumsan dui
          ac augue sodales molestie. Integer malesuada elementum turpis in
          placerat. Vestibulum tincidunt dapibus leo imperdiet laoreet. Vivamus
          blandit nulla nisi, eget vulputate est placerat ac. Vestibulum nec
          venenatis libero, eget maximus erat. Integer quis porta lorem.
          Suspendisse id mauris sit amet ipsum ultrices vulputate vel eu enim.
          Aenean vehicula hendrerit lectus ac molestie. Praesent hendrerit ipsum
          luctus massa gravnatis libero, eget maximus erat. Integer quis porta
          lorem. Suspendisse id mauris sit amet ipsum ultrices vulputate vel eu
          enim. Aenean vehicula hendrerit lectus ac molestie. Praesent hendrerit
          ipsum luctus massa ipsum ultrices vulputate vel eu enim. Aenean
          vehicula hendrerit lectus ac molestie. Praesent hendrerit ipsum luctus
          massa gravnatis libero, eget maximus erat. Integer quis porta lorem.
          Suspendisse id mauris sit amet ipsum ultrices vulputate vel eu enim.
          Aenean vehicula hendrerit lectus ac molestie. Praesent hendrerit ipsum
          luctus massa ipsum ultrices vulputate vel eu enim. Aenean vehicula
          hendrerit lectus ac molestie. Praesent hendrerit ipsum luctus massa
          gravnatis libero, eget maximus erat. Integer quis porta lorem.
          Suspendisse id mauris sit amet ipsum ultrices vulputate vel eu enim.
          Aenean vehicula hendrerit lectus ac molestie. Praesent hendrerit ipsum
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
  );
}

export default FeedBoxCaption;
