import { Avatar } from "@mui/material";
import React from "react";
import "./BlogPost.css";
import BlogPost1 from "./BlogPost1"
import BlogPost2 from "./BlogPost2"

function BlogPost() {
  return (
    <div className='blogPost'>
      <div className='blogPost__welcome'>
        <h1>Welcome to my blog!</h1>
      </div>
      <hr />
      <BlogPost2 />
      <BlogPost1 />
      
    </div>
  )
}

export default BlogPost;
