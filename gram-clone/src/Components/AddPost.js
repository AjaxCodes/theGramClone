import React, { useState } from "react";
import { Button } from "@material-ui/core";

function AddPost() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  return (
    <div>
      <input
        type=""
        placeholder="Enter a caption..."
        onChange={(event) => setCaption(event.target.value)}
        value={}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default AddPost;
