import React from 'react';
import './SixthSlide.scss'
import img from '../../assets/images/sixthSlide/logo.svg'
import img2 from '../../assets/images/sixthSlide/logo2.svg'
import servicelogo from '../../assets/images/sixthSlide/1.svg'
import servicelogo2 from '../../assets/images/sixthSlide/2.svg'
import servicelogo3 from '../../assets/images/sixthSlide/3.svg'
import servicelogo4 from '../../assets/images/sixthSlide/4.svg'
import servicelogo5 from '../../assets/images/sixthSlide/5.svg'


const SixthSlide = () => {
    return (
        <div className="container mt-2 mb-5">
        <div className='SixthSlide'>
                 <div className="fourth-header">
                <h2 className='text-end'> أفضل الممارسات <span style={{color:"red"}}> 
                     (الحلول)
               </span>
                </h2>
            </div>
        </div>
        {/*  */}
        <div className="sixth-row">
            <div className="sixth-right-side-column">
                <div className="headline-sixth-column">
                    <h5>نطاق التحدي</h5>
                    <img src={img} alt="" />
                </div>
                <div className="sixth-card-content">
                    <h5>يتم تطبيق اشتراطات كافة منتجات البنك لكافة فئات العملاء المستهدفين، وتشمل ذلك</h5>
                    <div className="card___container">
                        <div className="card___content___left_side">
                            <h6>منتجات البنك لقطاع الاعمال</h6>
                            <img src={servicelogo} alt="" />
                        </div>
                        <div className="card___content___left_side">
                            <h6>منتجات البنك الموجه للأفراد</h6>
                            <img src={servicelogo2} alt="" />
                        </div>
                    </div>
                    <div className="card___container mt-2">
                        <div className="card___content___left_side">
                             <h6>المبادرات التمويلية</h6>
                            <img src={servicelogo3} alt="" />
                        </div>
                        <div className="card___content___left_side">
                            <h6>منتجات القطاع غير الربحي</h6>
                            <img src={servicelogo4} alt="" />
                        </div>
                    </div>
                </div>
               {/*  */}
               <div className="headline-sixth-column">
                    <h5>نطاق التحدي</h5>
                    <img src={img} alt="" />
                </div>
                <div className="sixth-card-content">
                    <h5>يتم تطبيق اشتراطات كافة منتجات البنك لكافة فئات العملاء المستهدفين، وتشمل ذلك</h5>
                    <div className="card___container">
                        <div className="card___content___left_side">
                            <h6>منتجات البنك لقطاع الاعمال</h6>
                            <img src={servicelogo} alt="" />
                        </div>
                        <div className="card___content___left_side">
                            <h6>منتجات البنك الموجه للأفراد</h6>
                            <img src={servicelogo2} alt="" />
                        </div>
                    </div>
                    <div className="card___container mt-2">
                        <div className="card___content___left_side">
                            <h6>المبادرات التمويلية</h6>
                            <img src={servicelogo3} alt="" />
                        </div>
                        <div className="card___content___left_side">
                             <h6>منتجات القطاع غير الربحي</h6>
                            <img src={servicelogo4} alt="" />
                        </div>
                    </div>
                    <div className="card___container mt-2">
                        <div className="card___content___left_side" style={{opacity:"0"}}>
                            <h6>المبادرات التمويلية</h6>
                            <img src={servicelogo3} alt="" />
                        </div>
                        <div className="card___content___left_side">
                            <h6>العناية بالعملاء</h6>
                            <img src={servicelogo5} alt="" />
                        </div>
                    </div>
                </div>
               
                 {/*  */}
            </div>

            <div className="sixth-right-side-column">
            <div className="headline-sixth-column">
                     <h5><span> تحديات</span> إطلاق منتج جديد
                     </h5>
                    <img src={img2} alt="" />
                </div>

                <div className="sixth-card-content">
                   <div className="flex-column-title">
                    <p>عملية إطلاق المنتج الجديد غير واضحة وغير منظمة، مما يؤدي إلى تأخيرات ومشاكل</p>
                    <span>.1</span>
                   </div>
                   <div className="flex-column-title">
                    <p>عدم وضوح في الأدوار والمسؤوليات لإطلاق المنتجات الجديدة</p>
                    <span>.2</span>
                   </div>
                   <div className="flex-column-title">
                     <p>قد يتعارض إطلاق منتج جديد مع المهام القائمة، مما قد يؤدي إلى مشاكل في العمليات أو الخدمات</p>
                    <span>.3</span>
                   </div>
                   <div className="flex-column-title">
                     <p>ارتفاع عدد البلاغات والشكاوى بسبب التغييرات الغير مجدولة والتي تتضمن إطلاق او تغيير او اغلاق منتجات دون تخطيط او تبرير مسبق</p>
                    <span>.4</span>
                   </div>
                </div>

                <div className="headline-sixth-column">
                     <h5><span> تحديات</span> سد فجوات رحلة العميل
                     </h5>
                    <img src={img2} alt="" />
                </div>

                <div className="sixth-card-content">
                   <div className="flex-column-title">
                    <p>رحلة العميل مع البنك غير سلسة أو فعالة، مما قد يؤدي إلى عدم رضا العملاء أو فقدانهم</p>
                    <span>.1</span>
                   </div>
                   <div className="flex-column-title">
                    <p>هناك فجوات في رحلة العميل مع البنك، مما قد يؤدي إلى تجربة غير مرضية للعملاء</p>
                    <span>.2</span>
                   </div>
                   <div className="flex-column-title">
                    <p>هناك عدم وضوح في المسؤوليات والإجراءات المتعلقة بحوكمة البنك</p>
                    <span>.3</span>
                   </div>
                   <div className="flex-column-title">
                    <p>هناك عدم وضوح في الأدوار والمسؤوليات المتعلقة بتحسين الخدمات والمنتجات</p>
                    <span>.4</span>
                   </div>
                </div>
                
            </div>

        </div>
        {/*  */}
        </div>
    );
};

export default SixthSlide;