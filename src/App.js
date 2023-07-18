import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/pageHeader/Header';
import VideoContainer from './Components/VideoContainer/VideoContainer';
import './styles/main.scss';
import Upload from './pages/Upload';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoContainer />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
