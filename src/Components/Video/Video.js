import React from 'react';
import videos from "../../data/videos.json";
import './Video.scss';

function Video() {
  return (
    <div className="Videolist__container">
      {videos.map((video) => (
        <div key={video.id} className="Videolist__item">
          <div className="Videolist__imagelist">
            <img className="Videolist__image" src={video.image} alt="videos" />
          </div>
          <div className="Videolist__details">
            <h1 className="Videolist__title">{video.title}</h1>
            <p className="Videolist__channel">{video.channel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Video;
