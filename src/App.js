import React from 'react';
import Header from './Components/pageHeader/Header';
import VideoContainer from './Components/VideoContainer/VideoContainer';
import './styles/main.scss';
import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import Header from './Components/pageHeader/Header';
import Upload from './pages/Upload';



function App() {
  return (
    <div>
     
<Upload />
  
   <VideoContainer />
   
   <BrowserRouter>
   <Header />
   <Routes>


  <Route path='/Upload' element={<Header />}/>
   </Routes>
   
   </BrowserRouter>
      
    </div>
  );
}

export default App;
