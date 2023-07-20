import React, { useEffect, useState } from 'react';
import { fetchVideosdetails } from '../../api';
import NextVideoList from '../../pages/nextVideo'; // Assumit component in the same directory.

const VideoDetailsPage = ({ match }) => {
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const videoId = match.params.id;
    fetchVideoDetails(videoId);
  }, [match.params.id]);

  const fetchVideoDetails = async (videoId) => {
    try {
      const response = await fetchVideosdetails(videoId);
      setVideoDetails(response); // Assuming the response contains all the video details including "nextVideos" property.
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  if (!videoDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display video details */}
      <h2>{videoDetails.title}</h2>
      <p>Likes: {videoDetails.likes}</p>
      <p>Views: {videoDetails.views}</p>
      <p>Author: {videoDetails.author}</p>
      {/* Add more details as needed */}

      {/* Display the "Next Video" list */}
      <NextVideoList videos={videoDetails.nextVideos} />
    </div>
  );
};

export default VideoDetailsPage;
