import React from 'react';
import './Slider.scss'
import Navbar from '../../components/Navbar/Navbar'
const Slider = ({h1,h3,img,bg}) => {
    return (
        <>
        <div className='slider'>
           <img src={img} alt="" />
           <div className="black-overlay" style={{background:`${bg}`}}>
           <Navbar/>
           <div className="center-flex-item">
           <div className="container">
            <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-8">
                <div className="content-slide-for-slider">
                    <h1 data-aos="zoom-in-left" data-aos-duration="1200">{h1}</h1>
                    <h3 data-aos="zoom-in-left" data-aos-duration="1200">{h3}</h3>
                </div>
            </div></div>
           </div></div>
           </div>
        </div>
        </>
    );
};

export default Slider;