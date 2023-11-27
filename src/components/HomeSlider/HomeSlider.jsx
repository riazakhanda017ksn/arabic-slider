import React from 'react';
import 'animate.css';
import Navbar from '../../components/Navbar/Navbar'
import banner from '../../assets/images/banner/banner.png'

const HomeSlider = () => {
    return (
        <div style={{background:"#E8F2F3"}}>
        <div data-aos="zoom-in" data-aos-duration="1500">
            <Navbar/>

            <div className='slider' >
            <div className="container">
            <div className="position_____________relative">
            <div className="text_position_change">
            <h1 className='text-end' data-aos="zoom-in-left" data-aos-duration="1200"
         >تقرير إدارة تجربة العميل
         </h1>
            <h5 className='text-end' data-aos="zoom-in-left" data-aos-duration="1500"
            > إدارة تجربة العميل
            </h5>
            </div>
            <div className="relative">
             <div className="slide___image text-center"
            >
                <img src={banner} alt="" />
             </div>
             </div>
             </div></div>
        </div>
            
        </div>
        </div>
    );
};

export default HomeSlider;