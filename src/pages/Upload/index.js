
import "./upload.scss";


import React from 'react';
import videoThumbNail from '../../assets/Images/Upload-video-preview.jpg';

import publishIcon from '../../assets/Icons/publish.svg';

import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Upload() {
  const navigate = useNavigate(); 
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    videoFile: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormState({
      ...formState,
      videoFile: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('Video uploaded successfully!');
    navigate('/')
  };

  return (
    <div>
      <div className='videoThumbnail'>
        <h1 className='videoThumbnail__heading'>Upload Video</h1>
        <p className='videoThumbnail__title'>VIDEO THUMBNAIL</p>
        <img className='videoThumbnail__image' src={videoThumbNail} alt="Video Thumbnail" />
        <p className='videoThumbnail__title'>TITLE YOUR VIDEO</p>
        <input type='text' placeholder='Add a title to your video' />
        <p className='videoThumbnail__title'>ADD A VIDEO DESCRIPTION</p>
        <textarea placeholder='Add a description to your video'></textarea>
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
