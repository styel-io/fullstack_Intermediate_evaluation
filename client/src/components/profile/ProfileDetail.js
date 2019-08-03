import React from "react";
import { connect } from "react-redux";

const ProfileDetail = ({ website }) => {
  return (
    <div>
      <div>love ethereum</div>
      <div>{`${website}`}</div>
    </div>
  );
};

// props로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  website: state.profile.website
});

export default connect(mapStateToProps)(ProfileDetail);

// ProfileDetail.defaultProps = {
//   website: "styel.io"
// };
