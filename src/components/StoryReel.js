import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        title="Ijaz Ahamed"
        profileSrc="https://lh3.googleusercontent.com/ogw/ADGmqu_k17EGK65G5MwjYypa7CiTLRU9ET9DFA_3AkKe8A=s32-c-mo"
        imageSrc="https://images.pexels.com/photos/7400278/pexels-photo-7400278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Story
        title="Jeff Bezos"
        profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
        imageSrc="https://images.pexels.com/photos/6544065/pexels-photo-6544065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Story
        title="Elon Musk"
        profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
        imageSrc="https://images.pexels.com/photos/7125298/pexels-photo-7125298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Story
        title="Ijaz Ahamed"
        profileSrc="https://lh3.googleusercontent.com/ogw/ADGmqu_k17EGK65G5MwjYypa7CiTLRU9ET9DFA_3AkKe8A=s32-c-mo"
        imageSrc="https://images.pexels.com/photos/1208783/pexels-photo-1208783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Story
        title="Sundar Pichai"
        profileSrc="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
        imageSrc="https://images.pexels.com/photos/6432364/pexels-photo-6432364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </div>
  );
}

export default StoryReel;
