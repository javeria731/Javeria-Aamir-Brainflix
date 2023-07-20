import React, { useState } from 'react';
import videoThumbNail from '../../assets/Images/Upload-video-preview.jpg';
import './index.scss';
import publishIocn from '../../assets/Icons/publish.svg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
 
    navigate('/publishsuccess');

  };

  return (
    <div>
      <div className='videoThumnNail'>
        <h1 className='videoThumnNail__heading'>Upload Video</h1>
        <p className='videoThumnNail__title'>VIDEO THUMBNAIL</p>
        <img className='videoThumnNail__image' src={videoThumbNail} alt='Video ThumbNil' />
        <p className='videoThumnNail__title'>TITLE YOUR VIDEO</p>
        <input type='text' name='title' placeholder='Add a title to your video' onChange={handleInputChange} />
        <p className='videoThumnNail__title'>ADD A VIDEO DESCRIPTION</p>
        <textarea name='description' placeholder='Add a description to your video' onChange={handleInputChange} />
        <Link to="/login-success">
        <button className='publishIcon' onClick={handleSubmit}>
          <img className='publishIcon__image' src={publishIocn} alt='publish icon' />PUBLISH
        </button>
        </Link>
        <button className='Cancelbutton'>CANCEL</button>
      </div>
    </div>
  );
}

export default Upload;
