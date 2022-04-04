import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import React, { useState, useRef } from "react";
import { db, storage } from "./firebase";
import { useStateValue } from "./StateProvider";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { Avatar, Button } from "@mui/material";
import "./MessageSender.css";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);

  const postsCollectionRef = collection(db, "posts");

  //handle submit
  const handleSubmit = async (e) => {
    //dont refresh
    e.preventDefault();

    //upload file
    const fileRef = ref(storage, file.name);
    const snapshot = await uploadBytes(fileRef, file);

    //get url file
    const fileURL = await getDownloadURL(fileRef);

    //post to db
    await addDoc(postsCollectionRef, {
      message: input,
      timestamp: serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: fileURL,
      id: user.uid,
    });

    //reset fields
    setInput("");
    setImageUrl("");
    setFile(null);
  };

  const fileUpload = async () => {};

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`What's on your mind, ${user.displayName.split(
              " ",
              1
            )}?`}
          />

          {/* <input
            placeholder="Image Url (optional) "
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          /> */}
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <label className="fileUpload" htmlFor="input">
            <PhotoLibraryIcon style={{ color: "gray" }} />
            <input
              type="file"
              id="input"
              onChange={(e) => setFile(e.target.files[0])}
              hidden
            />
            <h3>Photo/Video</h3>
          </label>
        </div>
        <div className="messageSender__option">
          <button type="submit" onClick={handleSubmit}>
            <h3>Post</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
