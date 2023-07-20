import React, { useEffect, useState } from "react";
import VideoDetails from "../Videodetails/VideoDetails.js";

import { fetchVideosdetails} from "../../api.jsx";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const videoData = await fetchVideosdetails();
      setVideos(videoData);
    };
    fetchVideos();
  }, []);

  return (
    <div className="VideoList">
      {videos.map((video) => (
        <VideoDetails
          key={video.id}
          video={video}
          formattedTimestamp={formatTimestamp(video.timestamp)}
        />
      ))}
    </div>
  );
};

const formatTimestamp = (timestamp) => {
  // Format the timestamp as needed
  return timestamp;
};

export default VideoList;
