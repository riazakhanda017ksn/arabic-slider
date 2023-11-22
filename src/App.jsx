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

const App = () => {
  const h1 = `تقرير إدارة تجربة العميل`
  const h3 =`إدارة تجربة العميل  `
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='hero'>
      <Slider h1={h1} h3={h3}/>
      <Content/>
      <SecondPartContent/>
      <Slide/>
      <ThirdSlide/>
      <OtherContentSlide/>
      {/* <FourthSlide/> */}
      <SixthSlide/>
      <SevenSlide/>
      <EighthSlide/>
    </div>
  );
};

export default App;