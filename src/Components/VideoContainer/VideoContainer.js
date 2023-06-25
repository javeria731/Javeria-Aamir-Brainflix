import React, { useState } from "react";
import Videodetails from "../../data/video-details.json";
import videos from "../../data/videos.json";
import "./VideoContainer.scss";
import VideoPlayer from "../Videoplayer/Videoplayer";
import VideoDetails from "../Videodetails/VideoDetails";
import Comment from "../Comment/Comment";
import Video from "../Video/Video";
import Addcomment from "../addComment/Addcomment";

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

  const commentCount = selectedVideo.comments.length;

  return (
    <div id="parentContainer">
      <div className="Parent__display">
      <VideoPlayer video={selectedVideo} />
        <div className="video-container">
          
          
          <div className="video-container__left">
            <h1 className="Main__title">{selectedVideo.title}</h1>
            <p className="Main__description">{selectedVideo.description}</p>
            <VideoDetails video={selectedVideo} formattedTimestamp={formattedTimestamp} />
            <h1 className="CommentsCount">{commentCount} Comments</h1>
            <Addcomment />
            <div className="comments__container">
              {selectedVideo.comments.map((comment) => (
                <Comment key={comment.id} comment={comment} formattedTimestamp={formattedTimestamp} />

              ))
              }
             
            </div>
            </div>
            <div className="tester">
        <Video videos={sideVideos} handleVideoClick={handleVideoClick} selectedVideoId={selectedVideo.id} />
      </div>
          
          
        </div>
        

        
        
      </div>
    </div>
  );
};

export default VideoContainer;
