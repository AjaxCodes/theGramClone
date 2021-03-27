import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Posts from "./Components/Posts";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
    // line 11 section will function like a for loop everytime a new post is made,
    // to updated the database with the new posts
  }, []);

  return (
    <div className="app">
      <div className="app_header">
        <Header />
      </div>

      {posts.map(({ id, post }) => (
        <Posts
          key={id}
          username={posts.username}
          caption={posts.caption}
          imageUrl={posts.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
