import React from "react";
import videos from "../../data/videos.json";
import "./Video.scss";
import VideoListItem from "../VideoListItem/VideoListItem";

const VideoList = (props) => {
  const handleVideoClick = (videoId) => {
    const videoIndex = videos.findIndex((x) => x.id === videoId);
    props.handleVideoClick(videoIndex);
  };

  const sideVideos = videos.filter((video) => video.id !== props.selectedVideoId);

  return (
    <div className="Videolist__container">
      {sideVideos.map((video) => (
        <VideoListItem key={video.id} video={video} handleVideoClick={handleVideoClick} />
      ))}
    </div>
  );
};

export default VideoList;
