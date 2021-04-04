import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { db, storage } from "../firebase";

function AddPost() {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
      if(e.target.files[0]){
          setImage(e.targetfiles[0]);
      }
  }
  // ^^ only takes first file selected
  const handleUpload = () => {
      const uploadtask = storage.ref(`images/${image.name}`).put(image);
      uploadtask.on(
          "state_changed",
          (snapshot) => {
              const progress =Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(progress);
          },
          (error) => {
              console.log(error);
              alert(error.message);
          }
      )

  }

  return (
    <div>
      <input
        type=""
        placeholder="Enter a caption..."
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default AddPost;
