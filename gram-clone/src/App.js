import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Posts from "./Components/Posts";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "AjaxCodes",
      caption: "Would you look at that Cat! ",
      imageUrl:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg ",
    },
    {
      username: "AjaxCodes",
      caption: "Would you look at that Cat! ",
      imageUrl:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg ",
    },
  ]);

  return (
    <div className="app">
      <div className="app_header">
        <Header />
      </div>
      {posts.map((posts) => (
        <Posts
          username={posts.username}
          caption={posts.caption}
          imageUrl={posts.imageUrl}
        />
      ))}
      
    </div>
  );
}

export default App;
