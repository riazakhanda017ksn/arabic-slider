import React from 'react';
import './ThirteenSlide.scss'
import Slider from '../Slider/Slider';
import img from '../../assets/images/banner/banner9.jpg'

const ThirteenSlide = () => {
    const h1 = `التواصل`
    const h3 = ``
    const bg = `#000000bd`
    return (
        <div>
            <Slider h1={h1} h3={h3} bg={bg} img={img}/>
            
        </div>
    );
};

export default ThirteenSlide;