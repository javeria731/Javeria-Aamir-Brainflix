import React from 'react';
import { TextField } from '@mui/material';
import InputAdornment  from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';


import searchIcon from '../../assets/Icons/search.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import upload from '../../assets/Icons/upload.svg';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import './header.scss';

function Header() {
  return (
    <div className="Header">
      <div>
        <img className="Header__logo" src={logo} alt="Brain flix-logo" />
      </div>

      <div className="Header__top">
        <div>
         
          <div className="Header__top__input">
           <input type="text" placeholder='Search'></input>
           <img src={searchIcon} alt='searchicon'/>
          </div>
        </div>

        <div className="Header__avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      <div className="Header__bottom">
       
        <button className="Header__button">UPLOAD</button>
        <img className="Header__bottom--upload" src={upload} alt="upload icon" />
        <div className="Header__avatartablet">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
