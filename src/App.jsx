import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/HOME/Home';
import Header from './components/Header/Header';
import SecondSlideManagement from './components/SecondSlideManagement/SecondSlideManagement';
import ThirdSlideManagement from './components/ThirdSlideManagement/ThirdSlideManagement';
import SlideFiveManagement from './components/SlideFiveManagement/SlideFiveManagement';
import FourthSlideManagement from './components/FourthSlideManagement/FourthSlideManagement';
import SixthSlideManagement from './components/SixthSlideManagement/SixthSlideManagement';
import SevenSlideManagement from './components/SevenSlideManagement/SevenSlideManagement';
import EightSlideManagement from './components/EightSlideManagement/EightSlideManagement';
import NineSlideManagement from './components/NineSlideManagement/NineSlideManagement';
import TenthSlideManagement from './components/TenthSlideManagement/TenthSlideManagement';
import ElevenSlideManagement from './components/ElevenSlideManagement/ElevenSlideManagement';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
  <>
        <BrowserRouter>
        <ScrollToTop/>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/slide-2" element={<SecondSlideManagement/>} />
          <Route path="/slide-3" element={<ThirdSlideManagement/>} />
          <Route path="/slide-4" element={<FourthSlideManagement/>} />
          <Route path="/slide-5" element={<SlideFiveManagement/>} />
          <Route path="/slide-6" element={<SixthSlideManagement/>} />
          <Route path="/slide-7" element={<SevenSlideManagement/>} />
          <Route path="/slide-8" element={<EightSlideManagement/>} />
          <Route path="/slide-9" element={<NineSlideManagement/>} />
          <Route path="/slide-10" element={<TenthSlideManagement/>} />
          <Route path="/slide-11" element={<ElevenSlideManagement/>} />
        </Routes>
        </BrowserRouter>

  </>
  );
};

export default App;