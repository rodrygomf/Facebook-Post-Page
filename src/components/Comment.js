import React from "react";
import PropTypes from "prop-types";
import avatar from "../assets/avatar.png";
import "./Comment.css";

function Comment({ comment }) {
  return (
    <div id={comment.id} class="comment">
      <img class="avatar" src={avatar} />
      <span>
        <strong>{comment.author.name}</strong>&nbsp;{comment.content}
      </span>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
