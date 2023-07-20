import React from 'react';
import { BrowserRouter as Switch, Routes, Route, BrowserRouter, Router } from 'react-router-dom';
import Header from './Components/pageHeader/Header';
import VideoContainer from './Components/VideoContainer/VideoContainer';
import './styles/main.scss';
import Upload from './pages/Upload';
import Publishsuccess from './pages/Publishsuccess';

function App() {
  return (
      
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoContainer />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/Publishsuccess" element ={<Publishsuccess />}
/>      </Routes>
    </BrowserRouter>
      /* <Routes>
        <Route exact path="/" element={<VideoContainer />} />
        <Route exact path="/Upload" element={<Upload />} />
        <Route exact path="/video/:videoId" element={<VideoContainer />} />
      </Routes> */
  );
}

export default App;
