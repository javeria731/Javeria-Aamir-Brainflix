import React, { useState, useEffect } from "react";
import "./Video.scss";
import VideoListItem from "../VideoListItem/VideoListItem";
import { fetchSingleVideo } from "../../api";

const VideoList = (props) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchSingleVideoData = async () => {
      try {
        const videoData = await fetchSingleVideo(props.selectedVideoId);
        setSelectedVideo(videoData);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchSingleVideoData();
  }, [props.selectedVideoId]);

  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  
  const handleVideoItemClick = (index) => {
    props.handleVideoClick(index);
  };

  return (
    <div className="VideoList__container">
   
      {props.videos.map((video, index) => (
        <VideoListItem key={video.id} video={video} onClick={() => handleVideoItemClick(index)} />
      ))}
    </div>
  );
};

export default VideoList;