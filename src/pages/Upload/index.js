import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import videoThumbNail from '../../assets/Images/Upload-video-preview.jpg';
import publishIcon from '../../assets/Icons/publish.svg';
import './upload.scss';

function Upload() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newVideo = {
      title: formState.title,
      description: formState.description,
      image: 'https://i.imgur.com/DDJNZNw.jpg', // Hardcoded image path
    };

    try {
      const response = await fetch('http://localhost:8082/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newVideo),
      });

      if (response.ok) {
        console.log('Video uploaded successfully');
        // Reset formState or navigate to success page
      } else {
        console.error('Failed to upload video');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <div className='videoThumbnail'>
        <h1 className='videoThumbnail__heading'>Upload Video</h1>
        <p className='videoThumbnail__title'>VIDEO THUMBNAIL</p>
        <img className='videoThumbnail__image' src={videoThumbNail} alt="Video Thumbnail" />
        <p className='videoThumbnail__title'>TITLE YOUR VIDEO</p>
        <input type='text' placeholder='Add a title to your video' name="title" onChange={handleInputChange} />
        <p className='videoThumbnail__title'>ADD A VIDEO DESCRIPTION</p>
        <textarea placeholder='Add a description to your video' name="description" onChange={handleInputChange}></textarea>
        <button className="publishIcon" onClick={handleSubmit}>
          <img className="publishIcon__image" src={publishIcon} alt="publish icon" />
          PUBLISH
        </button>
        <button className="CancelButton">CANCEL</button>
      </div>
    </div>
  );
}

export default Upload;
