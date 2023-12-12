import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/HOME/Home';

const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
  <>
        <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
        </Routes>
        </BrowserRouter>

  </>
  );
};

export default App;