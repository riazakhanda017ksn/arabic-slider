import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import Slider from './components/Slider/Slider';
import Content from './components/Content/Content';
import SecondPartContent from './components/SecondPartContent/SecondPartContent';
import Slide from './components/Slide/Slide';
import ThirdSlide from './components/ThirdSlide/ThirdSlide';
import OtherContentSlide from './components/OtherContentSlide/OtherContentSlide';
import FourthSlide from './components/FourthSlide/FourthSlide';
import SixthSlide from './components/SixthSlide/SixthSlide';
import SevenSlide from './components/SevenSlide/SevenSlide';
import EighthSlide from './components/EighthSlide/EighthSlide';
import NinthSlide from './components/NinthSlide/NinthSlide';
import TenthSlide from './components/TenthSlide/TenthSlide';
import ElevenSlide from './components/ElevenSlide/ElevenSlide';
import TwelveSlide from './components/TwelveSlide/TwelveSlide';
import ThirteenSlide from './components/ThirteenSlide/ThirteenSlide';
import FourteenSlide from './components/FourteenSlide/FourteenSlide';
import FifteenSlide from './components/FifteenSlide/FifteenSlide';
import SixteenSlide from './components/SixteenSlide/SixteenSlide';
import LastSlide from './components/LastSlide/LastSlide';
import FiveSlide from './components/FiveSlide/FiveSlide';
import HomeSlider from './components/HomeSlider/HomeSlider';

const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='hero'>
      <HomeSlider/>
      <Content/>
      <SecondPartContent/>
      <Slide/>
      <ThirdSlide/>
      <OtherContentSlide/>
      <FourthSlide/>
      <FiveSlide/>
      <SixthSlide/>
      <SevenSlide/>
      <EighthSlide/>
      <NinthSlide/>
      <TenthSlide/>
      <ElevenSlide/>
      <TwelveSlide/>
      <ThirteenSlide/>
      <FourteenSlide/>
      <FifteenSlide/>
      <SixteenSlide/>
      <LastSlide/>
    </div>
  );
};

export default App;