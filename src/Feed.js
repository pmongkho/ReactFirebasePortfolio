import React, { useEffect, useState } from "react";
import MessageSender from "./MessageSender";
import Post from "./Post";
import "./Feed.css";
import { db } from "./firebase";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";


function Feed() {
  const [posts, setPosts] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  const q = query(postsCollectionRef, orderBy("timestamp","desc"));

  useEffect(()=>{
      onSnapshot(q, (snapshot)=>{
      setPosts(snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id, })))
  });
},[]);

  return (
    <div className="feed">
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.profilePic}
          message={post.message}
          timestamp={post.timestamp}
          username={post.username}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
