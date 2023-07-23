import React from "react";
import "./Video.scss";
import VideoListItem from "../VideoListItem/VideoListItem";

const VideoList = (props) => {
  const handleVideoItemClick = (index) => {
    console.log(props);
    props.handleVideoClick(index);
  };

  return (
    <div className="VideoList__container">
      {/* Render the list of video items */}
      {props.videos.map((video, index) => (
        <VideoListItem key={video.id} video={video} handleVideoClick={() => handleVideoItemClick(index)} />
      ))}
    </div>
  );
};

export default VideoList;
