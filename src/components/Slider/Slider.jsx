import React from 'react';
import banner from '../../assets/images/banner/banner.png'
import './Slider.scss'
const Slider = () => {
    return (
        <div className='slider'>
            <div className="container">
            <div className="position_____________relative">
            <div className="text_position_change">
            <h1 className='text-end' data-aos="fade-up"
             data-aos-duration="900">تقرير إدارة تجربة العميل</h1>
            <h5 className='text-end' data-aos="fade-down"
             data-aos-duration="1500">إدارة تجربة العميل</h5>
            </div>
            <div className="relative">
             <div className="slide___image text-center" data-aos="fade-up"
             data-aos-duration="1800">
                <img src={banner} alt="" />
             </div>
             </div>
             </div></div>
        </div>
    );
};

export default Slider;