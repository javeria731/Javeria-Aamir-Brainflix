import React from "react";
import videos from "../../data/videos.json";
import "./Video.scss";
import VideoListItem from "../VideoListItem/VideoListItem";

const VideoList = ({ selectedVideoId, handleVideoClick }) => {
  const mainVideo = videos.find((video) => video.id === selectedVideoId);
  const sideVideos = videos.filter((video) => video.id !== mainVideo?.id);

  return (
    <div className="Videolist__container">
      {mainVideo && (
        <VideoListItem key={mainVideo.id} video={mainVideo} handleVideoClick={handleVideoClick} />
      )}
      {sideVideos.map((video) => (
        <VideoListItem key={video.id} video={video} handleVideoClick={handleVideoClick} />
      ))}
    </div>
  );
};

export default VideoList;
