import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Posts from "./Components/Posts";
import gramClone from "./Images/gramClone.png";

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <Header />
      </div>
      <Posts
        username="AjaxCodes"
        caption="Would you look at that Cat! "
        imageUrl="https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg "
      />
      <Posts />
      <Posts />
    </div>
  );
}

export default App;
