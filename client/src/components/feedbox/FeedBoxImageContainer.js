import React from "react";
import { Image, Grid } from "semantic-ui-react";

function FeedBoxImageContainer(props) {
  return (
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
  );
}

FeedBoxImageContainer.propTypes = {};

export default FeedBoxImageContainer;
