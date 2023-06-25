import React from "react";
import './VideoPlayer.scss';

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
