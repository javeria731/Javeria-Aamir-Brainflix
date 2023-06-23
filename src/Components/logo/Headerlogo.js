import logo from '../../assets/Logo/BrainFlix-logo.svg';
import './logo.scss';
import React from 'react'


function Headerlogo() {
  return (
    <div>
     <img className="Header__logo"src = {logo} alt="Brain flix-logo"/>       
    </div>
  )
}

export default Headerlogo;
