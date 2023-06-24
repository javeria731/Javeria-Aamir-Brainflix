import React, { useState } from "react";
import videos from "../../data/videos.json";
import './Video.scss';
import VideoContainer from "../VideoContainer/VideoContainer";

const VideoList = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

  const handleVideoClick = (index) => {
    setSelectedVideoIndex(index);
  };

  return (
    <div className="Videolist__container">
      {videos.map((video, index) => (
        <div key={video.id} className="Videolist__item" onClick={() => handleVideoClick(index)}>
          <div className="Videolist__imagelist">
            <img className="Videolist__image" src={video.image} alt="videos" />
          </div>
          <div className="Videolist__details">
            <h1 className="Videolist__title">{video.title}</h1>
            <p className="Videolist__channel">{video.channel}</p>
          </div>
        </div>
      ))}
      {selectedVideoIndex !== null && (
        <VideoContainer selectedVideoIndex={selectedVideoIndex} />
      )}
    </div>
  );
};

export default VideoList;
