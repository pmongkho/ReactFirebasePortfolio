import { Avatar } from '@mui/material';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from 'react'
import './Post.css'

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div class="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div class="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div class="post__bottom">
        <p>{message}</p>
      </div>

      <div class="post__image">
        <img src={image} alt="" />
      </div>

      <div class="post__options">
        <div class="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div class="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div class="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
  
      </div>
    </div>
  );
}

export default Post
