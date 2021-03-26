import React from "react";
import "./Posts.css";
import gramClone from "../Images/gramClone.png";
import Avatar from "@material-ui/core/Avatar";

function Posts() {
  return (
    <div className="posts">
      <div className="posts_header">
        <Avatar
          className="posts_avatar"
          alt="AjaxCodes"
          src="/static/images/avatar/1.jpg"
        />
        <h3>username</h3>
      </div>

      <img className="posts_image" src={gramClone} alt="logo" />
      <h4 className="posts_text">
        <strong>AjaxCodes</strong> welcome to theGramClone
      </h4>
    </div>
  );
}

export default Posts;
