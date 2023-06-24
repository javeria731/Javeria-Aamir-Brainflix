import React, { useState } from "react";
import Videodetails from "../../data/video-details.json";
import videos from "../../data/videos.json";
import "./VideoContainer.scss";
import VideoPlayer from "../Videoplayer/Videoplayer";
import VideoDetails from "../Videodetails/VideoDetails";
import Comment from "../Comment/Comment";
import Video from "../Video/Video";

const VideoContainer = (props) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(
    props.selectedVideoIndex !== undefined ? props.selectedVideoIndex : 0
  );
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

  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div id="parentContainer">
      <div id="container">
        <VideoPlayer video={selectedVideo} />
        <h1 className="Main__title">{selectedVideo.title}</h1>
        <p className="Main__description">{selectedVideo.description}</p>
        <VideoDetails video={selectedVideo} formattedTimestamp={formattedTimestamp} />
        <div className="comments__container">
          {selectedVideo.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} formattedTimestamp={formattedTimestamp} />
          ))}
        </div>
        <Video videos={sideVideos} handleVideoClick={handleVideoClick} />
      </div>
    </div>
  );
};

export default VideoContainer;
