import React from "react";

const VideoPlayer = ({ video }) => {
  return (
    <div className="main-video">
      <video className="MainVideo" controls poster={video.image}>
        <source src={video.video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
