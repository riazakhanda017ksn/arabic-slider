import React from 'react';
import banner from '../../assets/images/banner/banner.png'
import './Slider.scss'
import Navbar from '../../components/Navbar/Navbar'

const Slider = ({h1,h3}) => {
    return (
        <>
        <Navbar/>
        <div className='slider'>
            <div className="container">
            <div className="position_____________relative">
            <div className="text_position_change">
            <h1 className='text-end' data-aos="zoom-in-left" data-aos-duration="1200"
         >{h1}</h1>
            <h5 className='text-end' data-aos="zoom-in-left" data-aos-duration="1500"
            >{h3}</h5>
            </div>
            <div className="relative">
             <div className="slide___image text-center" data-aos="fade-down"
            >
                <img src={banner} alt="" />
             </div>
             </div>
             </div></div>
        </div>
        </>
    );
};

export default Slider;