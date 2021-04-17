import React, { useEffect, useState } from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase";
import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.data.id}
          profileSrc={post.data.profileImage}
          userName={post.data.userName}
          image={post.data.image}
          message={post.data.message}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
