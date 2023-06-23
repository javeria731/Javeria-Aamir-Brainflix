import React from "react";
import Videodetails from "../../data/video-details.json";
import videos from "../../data/videos.json";
import "./VideoContainer.scss";
import viewicons from '../../assets/Icons/views.svg';
import likesicon from '../../assets/Icons/likes.svg';
const VideoContainer = () => {
  let titleVideo = Videodetails[0];

  const formattedTimestamp = new Date(titleVideo.timestamp).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  

  
  

  return (
    <div className="main-video">
      <video className="MainVideo" controls poster={titleVideo.image}>
        <source src={titleVideo.image} type="video/mp4" />
      </video>

      <h1 className="Main__title">{titleVideo.title}</h1>
      <p className="Main__description">{titleVideo.description}</p>
      <div className="Main__deatils">
      
      <div className="MainVideo__left">
      <h1>{titleVideo.channel}</h1>
      
        <p>{formattedTimestamp}</p>
       
     
      </div>
      <div className="MainVideo__right">
      
      <img  src ={viewicons} alt="viewicon"/>
      <p>{titleVideo.views}</p>
      <img  src ={likesicon} alt="likesicon"/>
      <p>{titleVideo.likes}</p>
    
      </div>
      </div>

      <div className="comments__container">
     
        {titleVideo.comments.map((comment) => (
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
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
