import React, { useState, useEffect } from "react";
import VideoPlayer from "../Videoplayer/Videoplayer";
import VideoDetails from "../Videodetails/VideoDetails"; // Import the VideoDetails component
import Comment from "../Comment/Comment";
import VideoList from "../Video/Video";
import Addcomment from "../addComment/Addcomment";
import { fetchVideos } from "../../api";


const VideoContainer = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const videosData = await fetchVideos();
        setVideos(videosData);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideos([]);
      }
    };

    fetchVideoData();
  }, []);

  const selectedVideo = videos[selectedVideoIndex];
  const sideVideos = videos.filter((video) => video.id !== selectedVideo?.id);
  const comments = selectedVideo?.comments || [];

  const formattedTimestamp = new Date(selectedVideo?.timestamp).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleVideoClick = (videoIndex) => {
    setSelectedVideoIndex(videoIndex);
  };

  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div id="parentContainer">
      <div className="Parent__display">
        <VideoPlayer video={selectedVideo} formattedTimestamp={formattedTimestamp}>
          {/* Pass video and formattedTimestamp to VideoDetails component */}
          <VideoDetails video={selectedVideo} formattedTimestamp={formattedTimestamp} />
        </VideoPlayer>
        <div className="video-container">
          <div className="video-container__left">
            <h1 className="Main__title">{selectedVideo.title}</h1>
            <p className="Main__description">{selectedVideo.description}</p>
            <h1 className="CommentsCount">{comments.length} Comments</h1>
            <Addcomment />
            <div className="comments__container">
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  comment={comment}
                  formattedTimestamp={formattedTimestamp}
                />
              ))}
            </div>
          </div>
          {/* Pass selectedVideo.id and handleVideoClick to VideoList component */}
          <VideoList selectedVideoId={selectedVideo.id} handleVideoClick={handleVideoClick} />
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
