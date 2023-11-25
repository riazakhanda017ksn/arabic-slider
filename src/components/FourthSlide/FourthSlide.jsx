import React from 'react';
import './FourthSlide.scss'
import img1 from '../../assets/images/FourthSlide/1.png'
import img2 from '../../assets/images/FourthSlide/2.png'
import img3 from '../../assets/images/FourthSlide/3.png'
import img4 from '../../assets/images/FourthSlide/4.png'
import chart1 from '../../assets/images/common-img/chart3.png'
import chart2 from '../../assets/images/common-img/chart4.png'
import chart3 from '../../assets/images/common-img/chart5.png'
import logo from '../../assets/images/FourthSlide/1.svg'
import logo2 from '../../assets/images/FourthSlide/2.svg'
import logo3 from '../../assets/images/FourthSlide/3.svg'
import logo4 from '../../assets/images/FourthSlide/4.svg'
import logo11 from '../../assets/images/FourthSlide/11.svg'
import logo22 from '../../assets/images/FourthSlide/22.png'
import logo33 from '../../assets/images/FourthSlide/33.png'
import frame from '../../assets/images/FourthSlide/frame.svg'
import frame2 from '../../assets/images/FourthSlide/frame2.svg'
import f1 from '../../assets/images/FourthSlide/chart1.png'
import f2 from '../../assets/images/FourthSlide/chart2.png'


const FourthSlide = () => {
    const data =[
        {
        id:"1",
        img:logo
        },
        {
            id:"2",
            img:logo2
        },
        {
            id:"3",
            img:logo3
        },
        {
            id:"4",
            img:logo4
        },

]

const data2 =[
    {
    id:"1",
    img:logo11
    },
    {
        id:"2",
        img:logo22
    },
    {
        id:"3",
        img:logo33
    },
]


    return (
        <div className='container py-5 '>
            <div className="fourth-header" data-aos="zoom-in-right"
             data-aos-duration="1500">
                <h2 className='text-end'> أفضل الممارسات <span> 
                     (الحلول)
               </span>
                </h2>
            </div>
            <div className="row mt-4">
               <div className="col-lg-4 mt-4" data-aos="zoom-in-right"
             data-aos-duration="1200">
                <div className="fourth-image-slide">
                   <img src={img1} alt="" />
                </div>
               </div>
               <div className="col-lg-8 mt-4" data-aos="zoom-in-right"
             data-aos-duration="1500">
                <div className="fourth-image-slide">
                   <img src={img2} alt="" />
                </div>
               </div>

               <div className="col-lg-6 mt-5" data-aos="zoom-in-right"
             data-aos-duration="1200">
               <div className="fourth-image-slide">
            
                <img src={img3} alt="" /> 
                  </div>
               </div>

               <div className="col-lg-6 mt-5" data-aos="zoom-in-right"
             data-aos-duration="1500">
               <div className="fourth-image-slide">
            
                <img src={img4} alt="" /> 
                  </div>
               </div>

            </div>
            {/*  */}
            <div className="fourth-header mt-5" data-aos="zoom-in-right"
             data-aos-duration="1000">
                <h2 className='text-end'> أفضل الممارسات <span> 
                     (الحلول)
               </span>
                </h2>
            </div>
           {/*  */}
           <div className="row mt-5">
            <div className="col-lg-6" data-aos="zoom-in-right"
             data-aos-duration="1200">
            <div className="border-shap-for-fourth-slide">
                <div className="row">
                    <div className="col-lg-6" data-aos="zoom-in-right"
             data-aos-duration="1300">
                    <div className="chart-containers__">
                   <div className="chart-headline____">
                    <p>Measure & Analyze</p>
                    <h5> 
                        تحليل البيانات            
                        </h5>
                        <span>.2</span>
                   </div>
                   <div className="fourth-flex-text___">
                    <p>مقاييس وصفية (أدوات قياس داخلية)</p>
                    <span>.1</span>
                   </div>
                   <div className="fourth-flex-text___">
                    <p>مقياس الوجهة النظرية (صوت العميل)</p>
                    <span>.2</span>
                   </div>
                   <div className="fourth-flex-text___">
                    <p>مقاييس الدعم (أدوات قياس الولاء)</p>
                    <span>.3</span>
                   </div>
                   <div className="fourth-flex-text___">
                    <p>تحليل الأسباب الجذرية RCA: Root Cause Analysis</p>
                    <span>.4</span>
                   </div>
                   <div className="fourth-flex-text___">
                    <p>تحليل إيشيكاوا Ishikawa Analysis، المعروف أيضًا بفحص السبب والنتيجة</p>
                    <span>.5</span>
                   </div>
                   <div className="fourth-flex-text___">
                    <p>تحليل اللماذا؟</p>
                    <span>.6</span>
                   </div>
                </div>
                    </div>
                    <div className="col-lg-6" data-aos="zoom-in-right"
             data-aos-duration="1500">
                    <div className="fourth-slide-img">
                        <img src={chart1} alt="" />
                    </div>
                    <div className="fourth-slide-img 12">
                        <img src={chart2} alt="" />
                    </div>
                    <div className="fourth-slide-img 13">
                        <img src={chart3} alt="" />
                    </div></div>
                </div>
            </div>
           </div>
           <div className="col-lg-6" data-aos="zoom-in-right"
             data-aos-duration="1500">
            <div className="border-shap-for-fourth-slide">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="chart-containers__">
                   <div className="chart-headline____">
                    <p>Define</p>
                    <h5> 
                    تعريف وقياس         
                        </h5>
                        <span>.1</span>
                   </div>
                   <div className="past-color-headline___">
                    <p>تحديد الفرصة باستخدام أدوات الاستجواب السبعة، وهي: من؟ ومتى؟ وأين؟ ولماذا؟ وكيف؟ وماذا؟ وكم؟</p>
                   </div>
                   <div className="col-must-be-8 mt-4">
                   <div className="row mt-4">
                    {
                        data.map(item=>{
                            return (
                                <div className='col-lg-3' key={item.id}>
                                    <div className="images text-center">
                                        <img src={item.img} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="col-lg-12" >
                    <div className="images text-center mt-3">

                        <img src={frame} alt="" />
                        </div>
                    </div>
                   </div>
                  </div>
                  
                   
                 
                </div>
                    </div>
                    
                </div>
            </div>
           </div>
           <div className="col-lg-6" data-aos="zoom-in-right"
             data-aos-duration="1300">
            <div className="border-shap-for-fourth-slide mt-4" style={{height:'400px'}}>
                <div className="row">
                    <div className="col-lg-6">
                    <div className="chart-containers__">
                      <small>* PSO : People, System and Organization</small>
                    </div>
                    </div>
                    <div className="col-lg-6" data-aos="zoom-in-right"
             data-aos-duration="1300">
                    <div className="chart-headline____" style={{background:"#13baeb",border:"1px solid rgb(19, 186, 235)"}}>
                        <p>Improve</p>
                     <h5> 
                    التخطيط للتحسينات
                    </h5>
                     <span>.3</span>
                   </div>
                

                    </div>
                </div>
                <div className="chart-headline-box">
                   <div className="cardparent">
                    <p>تحديد الملكية</p>
                    <span>.3</span>
                   </div>
                   <div className="cardparent">
                    <p>(PSO) *تصنيفها حسب</p>
                    <span>.2</span>
                   </div>
                   <div className="cardparent">
                    <p>تحديد مهام التحسين</p>
                    <span>.1</span>
                   </div>
                   <div className="cardparent mt-3">
                    <p>جدولة التحسينات</p>
                    <span>.4</span>
                   </div>
                   <div className="cardparent mt-3">
                    <p>تحديد شخص مسؤول للمتا
                   بعة من قسم تجربة العملاء </p>
                    <span>.5</span>
                   </div>

                   <div className="cardparent mt-3">
                    <p>التعامل مع الأقسام ذات الصلة</p>
                    <span>.6</span>
                   </div>
                   
                   </div>
                   <div className="table-image text-center">
                    <img src={frame2} alt="" />
                   </div>
            </div>
           </div>
           <div className="col-lg-6 mt-4" data-aos="zoom-in-right"
             data-aos-duration="1300">
            <div className="border-shap-for-fourth-slide" style={{height:'400px'}}>
                <div className="row">
                    <div className="col-lg-12">
                    <div className="chart-containers__">
                   <div className="chart-headline____" style={{background:"#469c09"}}>
                    <p>Control</p>
                    <h5> 
                    السيطرة والرصد                        </h5>
                        <span>.4</span>
                   </div>
                    <div className="last-fourth-image-item">
                        <img src={f1} alt="" />
                    </div>
                    <div className="last-fourth-image-item">
                        <img src={f2} alt="" />
                    </div>
                  
                   
                 
                </div>
                    </div>
                    
                </div>
            </div>
           </div>
           </div>
           {/*  */}
           
        </div>
    );
};

export default FourthSlide;