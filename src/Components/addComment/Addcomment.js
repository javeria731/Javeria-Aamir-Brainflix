import React from 'react'
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import { Button } from '@mui/material';
import addcomment from '../../assets/Icons/add_comment.svg';
import './addComment.scss';

function Addcomment() {
  return (

<div>
      <h1 className="Cmt__Heading">JOIN THE CONVERSATION</h1>
      <div className="comment__container">
        <div className="Cmt__Top">
          <div>
            <img src={avatar} alt="mohan avatar" />
          </div>
          <textarea>Add a new comment</textarea>
        </div>
        <div className="Cmt__button">
          <img src={addcomment} alt="upload icon" />
          <p>Comment</p>
        </div>
      </div>
    </div>
  );
}

export default Addcomment
