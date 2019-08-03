import React from "react";
import { connect } from "react-redux";

const ProfileDetail = ({ profile }) => {
  console.log(profile.website);
  return (
    <div>
      <div>love ethereum</div>
      <div>{profile.website}</div>
    </div>
  );
};

// props로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(ProfileDetail);
