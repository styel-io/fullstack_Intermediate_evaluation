import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Container, Menu, Icon, Image } from "semantic-ui-react";

const Navbar = ({
  auth: {
    isAuthenticated,
    loading,
    user: { name, avatar }
  },
  logout
}) => {
  const authLinks = (
    <Fragment>
      <Menu.Item>
        <Link to="/my_post">My Post</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/add_post">
          <Icon size="big" name="add circle" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={`/profileme`}>
          <Image
            src="//www.gravatar.com/avatar/0f9567f10713a42105ef8b2247ffcc96?s=200&r=pg&d=mm"
            avatar
            size="mini"
          />
        </Link>
      </Menu.Item>
      {/* <Menu.Item>
        <Link to="/upload_file">Upload_file</Link>
      </Menu.Item> */}
      {/* <Menu.Item>
        <Link onClick={logout} to="/">
          <span className="hide-sm"> Logout</span>
        </Link>
      </Menu.Item> */}
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Menu.Item>
        <Link to="login">
          <Icon name="user circle" size="big" />
        </Link>
      </Menu.Item>
    </Fragment>
  );
  return (
    <Fragment>
      <Menu fixed="top" borderless piled>
        <Container>
          <Menu.Item>
            <Link to="/">
              <Image src="https://styel.s3.ap-northeast-2.amazonaws.com/styel_42x42.png" />
            </Link>
          </Menu.Item>
          <Menu.Menu position="right">
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </Menu.Menu>
        </Container>
      </Menu>

      <div className="headerSpace" />
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
