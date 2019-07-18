import React from "react";
import PropTypes from "prop-types";
import "./Post.css";
import avatar from "../assets/avatar.png";
import Comment from "./Comment";

function Post({ post }) {
  return (
    <div class="post" id={post.id}>
      <div class="user">
        <img class="avatar" src={avatar} />
        <ul class="description-user">
          <li>
            <strong>{post.author.name}</strong>
          </li>
          <li>
            <span>{post.date}</span>
          </li>
        </ul>
      </div>
      <span class="comment">{post.content}</span>
      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

Post.propType = {
  post: PropTypes.object.isRequired
};

export default Post;
