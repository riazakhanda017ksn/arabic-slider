import React from 'react';
import Slider from '../Slider/Slider';
import NinthSlide from '../NinthSlide/NinthSlide';

const SixthSlideManagement = () => {
    const h1 = `موقع البنك`
    const h3 = ``
    return (
        <div>
            <div>
            <Slider h1={h1} h3={h3}/>
            </div>
            <NinthSlide/>
        </div>
    );
};

export default SixthSlideManagement;