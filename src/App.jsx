import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Content from './components/Content/Content';
import SecondPartContent from './components/SecondPartContent/SecondPartContent';
import Slide from './components/Slide/Slide';
import ThirdSlide from './components/ThirdSlide/ThirdSlide';
import OtherContentSlide from './components/OtherContentSlide/OtherContentSlide';
import FourthSlide from './components/FourthSlide/FourthSlide';
import SixthSlide from './components/SixthSlide/SixthSlide';
import SevenSlide from './components/SevenSlide/SevenSlide';

const App = () => {
  return (
    <div className='hero'>
      <Navbar/>
      <Slider/>
      <Content/>
      <SecondPartContent/>
      <Slide/>
      <ThirdSlide/>
      <OtherContentSlide/>
      {/* <FourthSlide/> */}
      <SixthSlide/>
      <SevenSlide/>
    </div>
  );
};

export default App;