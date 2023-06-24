import React from "react";
import viewicons from "../../assets/Icons/views.svg";
import likesicon from "../../assets/Icons/likes.svg";

const VideoDetails = ({ video, formattedTimestamp }) => {
  return (
    <div className="Main__details">
      <div className="MainVideo__left">
        <h1>{video.channel}</h1>
        <p>{formattedTimestamp}</p>
      </div>
      <div className="MainVideo__right">
        <img src={viewicons} alt="viewicon" />
        <p>{video.views}</p>
        <img src={likesicon} alt="likesicon" />
        <p>{video.likes}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
