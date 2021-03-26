import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <Header />
      </div>
      <Posts/>

      
    </div>
  );
}

export default App;
