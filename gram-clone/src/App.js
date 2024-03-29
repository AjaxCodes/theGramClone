import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Post from "./Components/Post";
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
  }, []);

  return (
    <div className="app">
     

      <div className="app_header">
        <Header />
      </div>
      <div className="app_post">
        {posts.map(({ id, post }) => (
          <Post
            key={id}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
