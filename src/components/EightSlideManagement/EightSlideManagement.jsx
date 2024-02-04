import React from 'react';
import TwelveSlide from '../TwelveSlide/TwelveSlide';
import Slider from '../Slider/Slider';

const EightSlideManagement = () => {
    const h1 = `الفروع`
    const h3 = ``
    return (
        <div>
       
            <Slider h1={h1} h3={h3}/>
            <TwelveSlide/>

        </div>
    );
};

export default EightSlideManagement;