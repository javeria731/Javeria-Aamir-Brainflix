import React, { useState, useEffect } from "react";
import "./VideoContainer.scss";
import VideoPlayer from "../Videoplayer/Videoplayer";
import VideoDetails from "../Videodetails/VideoDetails";
import Comment from "../Comment/Comment";
import Addcomment from "../addComment/Addcomment";

import VideoList from "../Video/Video";
import { fetchVideos, fetchSingleVideo } from "../../api";
import { useParams } from "react-router-dom";

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleString("en-US", {
    month: "2-digit", 
    day: "2-digit",   
    year: "numeric",  
  });
};

const VideoContainer = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const { videoId } = useParams();

  useEffect(() => {
    const fetchVideoData = async () => {
      const videosData = await fetchVideos();
      setVideos(videosData);
    };
    fetchVideoData();
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      console.log("fetching video", videoId);
      fetchSingleVideo(videoId || videos[0].id).then((response) => {
        console.log(response);
        setSelectedVideo(response);
      });
    }
  }, [videos, videoId]);

  if (!videos.length || !selectedVideo) {
    return <div>Loading...</div>;
  }

  const formattedTimestamp = formatDate(selectedVideo.timestamp);

  return (
    <div id="parentContainer">
      <div className="Parent__display">
        <VideoPlayer video={selectedVideo} />
        <div className="video-container">
          <div className="video-container__left">
            <h1 className="Main__title">{selectedVideo.title}</h1>
            <p className="Main__description">{selectedVideo.description}</p>
            <VideoDetails video={selectedVideo} formattedTimestamp={formattedTimestamp} />
            <h1 className="CommentsCount">{selectedVideo.comments.length} Comments</h1>
            <Addcomment />
            <div className="comments__container">
              {selectedVideo.comments.map((comment) => (
                <Comment
                  key={comment.id}
                  comment={comment}
                  formattedTimestamp={formatDate(comment.timestamp)}
                />
              ))}
            </div>
          </div>
          <div className="tester">
            <VideoList selectedVideoId={selectedVideo.id} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
