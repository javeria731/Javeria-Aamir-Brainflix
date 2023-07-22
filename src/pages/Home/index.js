import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage({ videos }) {
  const [mainVideo, setMainVideo] = useState(null);

  useEffect(() => {
    if (videos.length > 0) {
      setMainVideo(videos[0]);
    }
  }, [videos]);

  if (!mainVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render main video here */}
      <Link to={`/videos/${mainVideo.id}`}>Watch Video Details</Link>
    </div>
  );
}

export default HomePage;
