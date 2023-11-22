import React from 'react';
import './SecondPartContent.scss'
import {  dataContent } from '../../Data/Data';
import img from '../../assets/images/banner/banner3.jpg'
import Slider from '../Slider/Slider';
const SecondPartContent = () => {
  const  h1=`مؤشرات الاداء`
  const h3=``
    return (
        <>
        <div className='container pb-5 mb-3'>
            <div className="content">
                <div className="text-end" data-aos="fade-right" data-aos-duration="1200">
                    <h3>ملخص أبرز التحديات والحلول لمحطات تجربة العميل</h3>
                </div>

                <div className="flex_content_container" >
                    <div className="flex__content" data-aos="fade-right" data-aos-duration="1400">
                     <h4>مستوى تقدم</h4>
                     <h4>الحلول</h4>
                    </div>
                    <div className="flex__content" data-aos="fade-left" data-aos-duration="1400">
                       <h4>المحطات</h4>
                       <h4>أبرز التحديات</h4>
                    </div>
                </div>

            </div>
            {/*  */}

            <div className="row">
             
            {
                dataContent.map(item=>{
                    return(
                        <div className="col-lg-12" key={item.id}>
                        <div className="contents__description" data-aos={item.dataAos} data-aos-duration={item.time}>
                           <div className="parcantaze">
                            <p className="text-end">
                             {
                                item.parcentageTagline
                             }
                            </p>
                            <div className="border-shap">
                                <div className="border-shap-absolute" style={{width:`${item.parent}%`}}>
                                </div>
                            </div>
                           </div>
                           <div>
                            {
                                item.otherList.map(i=>{
                                    return (
                                        <div className="lines" key={i.id}>
                                        <p>{i.name}</p>
                               <p> .{i.id}</p>
                               </div>
                                    )
                                })
                            }
                              
                            
                           </div>
                           <div>

                           {
                                item.list.map(i=>{
                                    return (
                                        <div className="lines" key={i.id}>
                                        <p>{i.name}</p>
                                        <p> .{i.id}</p>
                               </div>
                                    )
                                })
                            }
                    
                              
                           </div>
                            <div className="tag-line-flex">
                           <div className="tag-line">
                            <div className="tag-line-caption">
                                <h3>{item.name}</h3>
                            </div>
                            <div className="number">
                                <span>{item.id}</span>
                            </div>
                           </div></div>
                           
                        </div>
                     </div>
                    )
                })
            }

            </div>

            {/*  */}
           

            {/*  */}
        </div>
           <Slider h1={h1} h3={h3} />
        </>
    );
};

export default SecondPartContent;