import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";


function Posts({ username, caption, imageUrl }) {
  
  return (
    <div className="posts">
      <div className="posts_header">
        <Avatar
          className="posts_avatar"
          alt="AjaxCodes"
          src="/static/images/avatar/1.jpg"
        />
        <h1>{username}</h1>
      </div>

      <img className="posts_image" src={imageUrl} alt="" />
      <h4 className="posts_text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Posts;
