import React from 'react';
import './FiveSlide.scss'
import logo from '../../assets/images/fiveSlide/logo.svg'
import logo2 from '../../assets/images/fiveSlide/logo1.svg'
import arrowdown from '../../assets/images/fiveSlide/arrow-down.svg'
import search from '../../assets/images/fiveSlide/search.svg'
import img from '../../assets/images/fiveSlide/img.png'
import Slider from '../../components/Slider/Slider'
const FiveSlide = () => {
    const h1 = `إدارة المنتجات`
    const h3 = ``
    return (
        <>
        <div className='fiveSlide'>
             <div className="navbar-container">
                <div className="logo text-end">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-item">
                <a href="">NPS</a>
                <a href="">CSAT</a>
                <a href="">CES</a>
                <a href="">Focus Groups</a>
                <a href="">Complaint</a>
                <a href="">Sentiment</a>
                <a href="">Loss Tree</a>
                <a href="" style={{background:"#0a9ba5",color:"white"}}>Executive</a>
             </div>
             </div>

             <div className="sidebar-and-dashboard ">
                <div className="______sidebar">
                    <div className="position-changing-those-item">
                    <h5>التاريخ</h5>
                    <div className="side-bar-text-containers-flex">
                        <p>تاريخ البدء</p>
                        <img src={logo2} alt="" />
                    </div>
                    <div className="side-bar-text-containers-flex">
                        <p>تاريخ الانتهاء</p>
                        <img src={logo2} alt="" />
                    </div>
                    </div>

                    <div className="position-changing-those-item mt-4">
                        <h5>تصنيف العملاء</h5>
                    <div className="side-bar-text-containers-flex flex-those-line">
                    <img src={arrowdown} alt="" />
                        <p>تاريخ البدء</p>
                    
                    </div>
                   
                    </div>

                    <div className="position-changing-those-item mt-4">
                        <h5>الجنس</h5>
                    <div className=" flex-those-lines">
                    <span className="box-1">
                    أنثى
                    </span>  
                    <span className="box-2" style={{background:"#0a9ba5",color:"white"}}>
                    ذكر
                    </span>
                    </div>
                   
                    </div>
                    <div className="position-changing-those-item mt-4">
                        <h5>المنطقة</h5>
                    <div className="side-bar-text-containers-flex flex-those-line">
                    <img src={arrowdown} alt="" />
                    <p>الرياض</p>                    
                    </div>
                   
                    </div>
                    <div className="position-changing-those-item mt-4">
                        <h5>نقاط الإتصال</h5>
                    <div className="side-bar-text-containers-flex flex-those-line">
                    <img src={search} alt="" />
                    <p>الرياض</p>
                    </div>
                   
                    </div>
                    <div className="position-changing-those-item mt-4">
                    <h5>العم</h5>
                     <div className="full-widthimages">
                        <img src={img} alt="" />
                     </div>
                   
                    </div>
                </div>
                <div className="dashboard___"></div>
             </div>
            
        </div>
        <div className="my-5">
        <Slider h1={h1} h3={h3}/>
        </div>
        </>
    );
};

export default FiveSlide;