import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Alert from "../layout/Alert";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const HeaderColumn = styled.div``;

const UsernameRow = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.span`
  font-size: 26px;
  display: block;
`;

const Counts = styled.ul`
  display: flex;
  margin: 15px 0px;
`;

const Count = styled.li`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const FullName = styled(FatText)`
  font-size: 16px;
`;

const Bio = styled.p`
  margin: 10px 0px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Wrapper>
      <Helmet>
        <title>{username} | Prismagram</title>
      </Helmet>
      <Header>
        <HeaderColumn>
          <Avatar size="lg" url={avatar} />
        </HeaderColumn>
        <HeaderColumn>
          <UsernameRow>
            <Username>{username}</Username>{" "}
            {isSelf ? (
              <Button onClick={logOut} text="Log Out" />
            ) : (
              <FollowButton isFollowing={isFollowing} id={id} />
            )}
          </UsernameRow>
          <Counts>
            <Count>
              <FatText text={String(postsCount)} /> posts
            </Count>
            <Count>
              <FatText text={String(followersCount)} /> followers
            </Count>
            <Count>
              <FatText text={String(followingCount)} /> following
            </Count>
          </Counts>
          <FullName text={fullName} />
          <Bio>{bio}</Bio>
        </HeaderColumn>
      </Header>
      <Posts>
        {posts &&
          posts.map(post => (
            <SquarePost
              key={post.id}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
              file={post.files[0]}
            />
          ))}
      </Posts>
    </Wrapper>
    // <Fragment>
    //   <Grid textAlign="center" verticalAlign="middle">
    //     <Grid.Column style={{ maxWidth: 350 }} className="signform">
    //       <Header as="h2" color="teal" textAlign="center">
    //         STYEL
    //       </Header>
    //       <Form size="large" onSubmit={e => onSubmit(e)}>
    //         <Segment>
    //           <Form.Input
    //             fluid
    //             type="email"
    //             placeholder="Email Address"
    //             name="email"
    //             value={email}
    //             onChange={e => onChange(e)}
    //           />
    //           <Form.Input
    //             fluid
    //             type="password"
    //             placeholder="Password"
    //             name="password"
    //             value={password}
    //             onChange={e => onChange(e)}
    //           />
    //           <Button color="teal" fluid size="large" type="submit">
    //             Login
    //           </Button>
    //         </Segment>
    //       </Form>
    //       <Alert />
    //       <Message id="replaceAlert">
    //         New to us? <Link to="/register">&nbsp; Sign Up</Link>
    //       </Message>
    //     </Grid.Column>
    //   </Grid>
    // </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
