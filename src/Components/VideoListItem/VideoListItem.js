import React from "react";
import { Link } from "react-router-dom";



//const VideoListItem = ({ video, handleVideoClick }) => {
const VideoListItem = ({ video }) => {
  return (


      //<div className="Videolist__item" onClick={() => handleVideoClick(video.id)}>
    <div className="Videolist__item">
      <Link to={`/videos/${video.id}` } className="Videolist__item">
        <div className="Videolist__imagelist">
          <img className="Videolist__image" src={video.image} alt="videos" />
        </div>
        <div className="Videolist__details">
          <h1 className="Videolist__title">{video.title}</h1>
          <p className="Videolist__channel">{video.channel}</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoListItem;
