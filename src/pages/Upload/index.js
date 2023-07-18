import React from 'react'

import videoThumbNail from '../../assets/Images/Upload-video-preview.jpg';
import './index.scss';
import publishIocn from '../../assets/Icons/publish.svg';

function Upload() {
  return (
    <div>
      <div className='videoThumnNail'>
      <h1 className='videoThumnNail__heading'>Upload Video</h1>
      <p className='videoThumnNail__title'>VIDEO THUMBNAIL</p>
       <img className='videoThumnNail__image' src={videoThumbNail} alt="Video ThumbNil" />
       <p className='videoThumnNail__title'>TITLE YOUR VIDEO</p>
       <input type='text' placeholder='Add a title to your video'/>
       <p className='videoThumnNail__title'>ADD A VIDEO DESCRIPTION</p>
       <textarea  placeholder ='Add a description to your video'></textarea>
       <button className="publishIcon">
       <img className="publishIcon__image" src={publishIocn} alt="publish icon" />PUBLISH
        
        </button>
        <button className="Cancelbutton">CANCEL</button>
       
       </div>
    </div>
  )
}

export default Upload
