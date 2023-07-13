import React from 'react';
import Header from './Components/pageHeader/Header';
import VideoContainer from './Components/VideoContainer/VideoContainer';
import './styles/main.scss';
import {BrowserRouter ,Routes ,Route} from "react-router-dom";



function App() {
  return (
    <div>
     

   <Header />
   <VideoContainer />
   
   <BrowserRouter>
   <Routes>


    <Route></Route>
   </Routes>
   
   </BrowserRouter>
      
    </div>
  );
}

export default App;
