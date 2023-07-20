import React from 'react';
import { Link } from 'react-router-dom';


const NextVideoList = ({ videos }) => {
  return (
    <div>
      <h3>Next Videos:</h3>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <Link to={`/video/${video.id}`}>{video.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NextVideoList;
