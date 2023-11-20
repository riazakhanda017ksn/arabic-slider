import React from 'react';
import banner from '../../assets/images/banner/banner.png'
import './Slider.scss'
const Slider = () => {
    return (
        <div className='slider'>
            <div className="container">
            <div className="text_position_change">
            <h1 className='text-end'>تقرير إدارة تجربة العميل</h1>
            <h5 className='text-end'>إدارة تجربة العميل</h5>
            </div>
            <div className="relative">
             <div className="slide___image text-center">
                <img src={banner} alt="" />
             </div>
             </div>
             </div>
        </div>
    );
};

export default Slider;