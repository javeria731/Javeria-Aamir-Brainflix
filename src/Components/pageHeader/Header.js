import React from 'react';
import { TextField } from '@mui/material';
import InputAdornment  from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';


import searchIcon from '../../assets/Icons/search.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import upload from '../../assets/Icons/upload.svg';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <div>
        <Link to ="/">
          <img className="Header__logo" src={logo} alt="Brain flix-logo" />
        </Link>
      </div>

      <div className="Header__top">
        <div>
         
          <div className="Header__top__input">
          <img src={searchIcon} alt='searchicon'/>
           <input type="text" placeholder='Search'>
           </input>
           
          </div>
        </div>

        <div className="Header__avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      <div className="Header__bottom">
        <Link to="/Upload">
          <button className="Header__button">
          <img  src={upload} alt="upload icon" />UPLOAD
          </button>
       </Link>
        <div className="Header__avatartablet">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
