import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";
import { Image } from "semantic-ui-react";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div className="post bg-white p-1 my-1">
    <div>
      <Link to={`/profile/${user}`}>
        <Image circular src={avatar} alt="" size="mini" />
        {name}
      </Link>
    </div>
    <div>
      <p>{text}</p>
      <p>
        <Moment format="YYYY/MM/DD">{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
          <button onClick={() => addLike(_id)} type="button">
            <i className="fas fa-thumbs-up" />{" "}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button onClick={() => removeLike(_id)} type="button">
            <i className="fas fa-thumbs-down" />
          </button>
          <Link to={`/posts/${_id}`}>
            Discussion {comments.length > 0 && <span>{comments.length}</span>}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button onClick={() => deletePost(_id)} type="button">
              <i className="fas fa-times" />
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
