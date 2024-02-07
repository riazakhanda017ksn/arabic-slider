import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/HOME/Home";
import Header from "./components/Header/Header";
import SecondSlideManagement from "./components/SecondSlideManagement/SecondSlideManagement";
import ThirdSlideManagement from "./components/ThirdSlideManagement/ThirdSlideManagement";
import SlideFiveManagement from "./components/SlideFiveManagement/SlideFiveManagement";
import FourthSlideManagement from "./components/FourthSlideManagement/FourthSlideManagement";
import SixthSlideManagement from "./components/SixthSlideManagement/SixthSlideManagement";
import SevenSlideManagement from "./components/SevenSlideManagement/SevenSlideManagement";
import EightSlideManagement from "./components/EightSlideManagement/EightSlideManagement";
import NineSlideManagement from "./components/NineSlideManagement/NineSlideManagement";
import TenthSlideManagement from "./components/TenthSlideManagement/TenthSlideManagement";
import ElevenSlideManagement from "./components/ElevenSlideManagement/ElevenSlideManagement";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Map from "./components/Map/Map";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
const App = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleToggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  const isMapRoute = location.pathname === "/map";

  return (
    <div className="root">
      <BrowserRouter>
        <ScrollToTop />
        <div className={`app ${isMinimized ? "minimized" : ""}`}>
          {!isMapRoute && (
            <div className="header">
              <Header />
            </div>
          )}

          <div className="remaining-content">
            <Routes>
              <Route exact path="/slide-1" element={<Home />} />
              <Route path="/slide-2" element={<SecondSlideManagement />} />
              <Route path="/slide-3" element={<ThirdSlideManagement />} />
              <Route path="/slide-4" element={<FourthSlideManagement />} />
              <Route path="/slide-5" element={<SlideFiveManagement />} />
              <Route path="/slide-6" element={<SixthSlideManagement />} />
              <Route path="/slide-7" element={<SevenSlideManagement />} />
              <Route path="/slide-8" element={<EightSlideManagement />} />
              <Route path="/slide-9" element={<NineSlideManagement />} />
              <Route path="/slide-10" element={<TenthSlideManagement />} />
              <Route path="/slide-11" element={<ElevenSlideManagement />} />
            </Routes>
            {!isMapRoute && (
              <div className="toggle-container">
                <div className="toggle-button" onClick={handleToggleMinimize}>
                  {isMinimized ? (
                    <ChevronDoubleRightIcon className="icons" />
                  ) : (
                    <ChevronDoubleLeftIcon className="icons" />
                  )}
                </div>
              </div>
            )}
          </div>
          <Routes>
            <Route path="/" element={<Map />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
