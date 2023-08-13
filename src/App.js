import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Updated imports
import Header from './Components/pageHeader/Header';
import VideoContainer from './Components/VideoContainer/VideoContainer';
import './styles/main.scss';
import Upload from './pages/Upload';
import Success from './pages/success'; // Corrected import
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoContainer />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/videos/:videoId" element={<VideoContainer />} />
        <Route path="/success" element={<Success />} /> 
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
