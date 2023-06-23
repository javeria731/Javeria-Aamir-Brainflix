import React from 'react'
import searchicon from '../../assets/Icons/search.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import upload from '../../assets/Icons/upload.svg';
import './header.scss';

function Header() {
  return (
    <div>
      <div className="Header__top">
     <div>
      <img className ="Header__Icon"src= {searchicon} alt='search icon'/>
      <input className="Header__input" type="text" placeholder="Search" />
      </div>
      <div className="Header__avatar">
        <img src ={avatar} alt='avatar'/>
      </div>
    </div>
    
       <div className="Header__bottom">
        <img className="Header__bottom--upload"src={upload} alt='upload icon'/>
        <button className='Header__button'>UPLOAD</button>
        </div>




    </div>
  )
}

export default Header
