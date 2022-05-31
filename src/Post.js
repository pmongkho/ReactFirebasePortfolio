import { Avatar } from '@mui/material';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from 'react'
import './Post.css'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

function Post({ profilePic, image, username, timestamp, message }) {

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
  // docRef.id
};
const handleDelete = async ()=>{
  const docRef = doc(db, "posts", doc.id);
  console.log(doc.id)
  
  await deleteDoc(docRef);
}


  return (
    <div className="post">
      <div class="post__top">
        <div className="post__top__left">
          <Avatar src={profilePic} className="post__avatar" />

          <div class="post__topInfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <div className="post__top__right">
          <MoreVertIcon onClick={handleClick} />{" "}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleDelete} >Delete?</MenuItem>
       
          </Menu>
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
