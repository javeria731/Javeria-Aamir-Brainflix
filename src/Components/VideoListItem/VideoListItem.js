import React from "react";

const VideoListItem = ({ video, handleVideoClick }) => {
  return (
    <div className="Videolist__item" onClick={() => handleVideoClick(video.id)}>
      <div className="Videolist__imagelist">
        <img className="Videolist__image" src={video.image} alt="videos" />
      </div>
      <div className="Videolist__details">
        <h1 className="Videolist__title">{video.title}</h1>
        <p className="Videolist__channel">{video.channel}</p>
      </div>
    </div>
  );
};

export default VideoListItem;
