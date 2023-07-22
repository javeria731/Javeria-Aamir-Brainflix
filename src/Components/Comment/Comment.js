import React from "react";
import'./Comments.scss';

const Comment = ({ comment, formattedTimestamp }) => {
  return (
    <div key={comment.id} className="comment">
      <div className="comment__Namadate">
        <h2>{comment.name}</h2>
        <p>{formattedTimestamp}</p>
      </div>
      <div className="comments__avatar"></div>
      <div className="Comments__text">
        <p>{comment.comment}</p>
        
      </div>
    </div>
  );
};

export default Comment;
