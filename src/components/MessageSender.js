import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";
import "./MessageSender.css";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userName: user.displayName,
      image: url,
      profileImage: user.photoURL,
    });
    setInput("");
    setUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`what's on your mind ${
              user.displayName.split(" ")[0]
            }?`}
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
