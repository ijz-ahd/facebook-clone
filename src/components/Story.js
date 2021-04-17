import React from "react";
import { Avatar } from "@material-ui/core";
import "./Story.css";

function Story({ imageSrc, profileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${imageSrc})` }}>
      <Avatar src={profileSrc} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
