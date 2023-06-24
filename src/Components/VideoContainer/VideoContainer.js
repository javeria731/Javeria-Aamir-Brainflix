import React, { useState } from "react";
import Videodetails from "../../data/video-details.json";
import videos from "../../data/videos.json";
import "./VideoContainer.scss";
import viewicons from "../../assets/Icons/views.svg";
import likesicon from "../../assets/Icons/likes.svg";
import Video from "../Video/Video";

const VideoContainer = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const selectedVideo = Videodetails[selectedVideoIndex];
  const sideVideos = videos.filter((video) => video.id !== selectedVideo.id);

  const formattedTimestamp = new Date(selectedVideo.timestamp).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleVideoClick = (index) => {
    setSelectedVideoIndex(index);
  };

  return (
    <div>
      <div className="main-video">
        <video className="MainVideo" controls poster={selectedVideo.image}>
          <source src={selectedVideo.video} type="video/mp4" />
        </video>
      </div>
      <h1 className="Main__title">{selectedVideo.title}</h1>
      <p className="Main__description">{selectedVideo.description}</p>
      <div className="Main__details">
        <div className="MainVideo__left">
          <h1>{selectedVideo.channel}</h1>
          <p>{formattedTimestamp}</p>
        </div>
        <div className="MainVideo__right">
          <img src={viewicons} alt="viewicon" />
          <p>{selectedVideo.views}</p>
          <img src={likesicon} alt="likesicon" />
          <p>{selectedVideo.likes}</p>
        </div>
      </div>
      <div className="comments__container">
        {selectedVideo.comments.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comment__Namadate">
              <h2>{comment.name}</h2>
              <p>{formattedTimestamp}</p>
            </div>
            <div className="comments__avatar"></div>
            <div className="Comments__text">
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <Video videos={sideVideos} handleVideoClick={handleVideoClick} />
    </div>
  );
};

export default VideoContainer;