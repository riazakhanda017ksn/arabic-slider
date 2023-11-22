import React from 'react';
import './EighthSlide.scss'
import img from '../../assets/images/banner/logo.png'
import img2 from '../../assets/images/banner/logo2.png'
import img11 from '../../assets/images/banner/banner6.png'
const EighthSlide = () => {
    return (
        <div className='eighth-slide'>
            <div className="container">
            <div className="fourth-header mb-5" data-aos="fade-down" data-aos-duration="1300">
                <h2 className='text-end'>تحليل نظام التذاكر<span style={{color:"#13e0b8"}}> 
                (الحلول)
               </span>
                </h2>

                <div className="headline-of-eighthSlide">
                 <p>الا أنه بناءً على بحثنا حول المتطلبات التنظيمية الدولية لأدلة تصنيف البلاغات وتصنيف الشكاوى، يوصى بتصنيف بلاغات خدمة العملاء على أنها متعددة الأبعاد (multi-dimensional) ...</p>
                </div>
             </div>
             <div className="eighth-grid-container">
                <div className="main____height">
                <div className="eighth-item" data-aos="zoom-in-right" data-aos-duration="1300">
                    <h6 data-aos="zoom-in-right" data-aos-duration="1300">التصنيف الرابع</h6>
                    <div className="eighth-headline" data-aos="zoom-in-right" data-aos-duration="1400">
                        <h5>السبب الأولي/ الهدف من رفع البلاغ</h5>
                    </div>
                    {/*  */}
                     <div className="eighth-content" data-aos="zoom-in-right" data-aos-duration="1300">
                     <div className="list-style-container">
                       <span>تأخير</span>
                       <span>عطل تقني</span>
                       <span>عدم مطابقة المنتج / الخدمة</span>
                     </div>
                     <div className="parent mt-2">
                       <span>معلومات غير واضحة</span>
                       <span>خدمة العملاء</span>
                       <span>ملاءمة المنتج / الخدمة</span>
                     </div>
                     <div className="text-end-side__">
                       <span>حماية بيانات العميل</span>
                     </div>
                     </div>

                     <div className="eighth-content " data-aos="zoom-in-right" data-aos-duration="1400">
                        <div className="more-class">
                        <span>طلب مستندات متعلقة بـ (منتج/خدمة)</span>
                         <span>طلب تمديد (منتج/خدمة)</span>
                         <span>تحديث بيانات العميل (الاسم / العنوان / رقم الجوال)</span>
                         <span>طلب تعديل (منتج/خدمة)</span>
                         <span>طلب إلغاء (منتج/خدمة)</span>
                         <span>طلب إضافات على (منتج/خدمة)</span>
                         </div>
                     </div>

                     <div className="eighth-content" data-aos="zoom-in-right" data-aos-duration="1500">
                     <div className="text-end-side__">
                       <span>استفسار عن آلية طلب <br />(منتج / خدمة)</span>
                     </div>
                     <div className="text-end-side__">
                      <span>استفسار عن (منتج / خدمة) <br /> متعلق بالعميل</span>
                     </div>
                     </div>
                     
                    {/*  */}
                </div>
                </div>
                <div className="eighth-item" >
                    <h6 data-aos="zoom-in" data-aos-duration="1500">التصنيف الثالث</h6>
                    <div className="eighth-headline" data-aos="zoom-out" data-aos-duration="1500">
                        <h5>أين في رحلة العميل¹ / نقطة التواصل مع العميل (Touchpoint)</h5>
                    </div>
                    <div className="eighth-content" data-aos="fade-up" data-aos-duration="1200">
                         <div className="img-section-for-content" data-aos="fade-up" data-aos-duration="1100">
                            <img src={img} alt="" />
                            <h6>نقاط التواصل</h6>
                            <h4>قبل المنتج/الخدمة</h4>
                         </div>

                         <div className="img-section-for-content content-positon-changing" data-aos="fade-up" data-aos-duration="1100">
                            <img src={img2} alt="" />
                            <h4 className='mt-3'>خلال المنتج/الخدمة</h4>
                         </div>

                         <div className="img-section-for-content content-positon-changing" style={{top:'170px'}} data-aos="fade-up" data-aos-duration="1100">
                            <img src={img2} alt="" />
                            <h4 className='mt-3'>بعد المنتج/الخدمة</h4>
                         </div>
                    </div>
                </div>
                <div className="eighth-item" >
                     <h6 data-aos="fade-up" data-aos-duration="1100">التصنيف الثاني</h6>
                    <div className="eighth-headline" data-aos="fade-down" data-aos-duration="1100">
                        <h5>ما هي مجموعة (المنتج / الخدمة) و(المنتج / الخدمة)</h5>
                    </div>
                    <div className="eighth-content" >
                       <div className="eighth-slide-third-section">
                        <div className="flex-eight-content-item" data-aos="zoom-in-right" data-aos-duration="1200">
                            <h3>مجموعة (المنتج / الخدمة)</h3>
                            <h3>.1</h3>
                        </div>
                        <div className="white-border-design" data-aos="zoom-in-left" data-aos-duration="1300">
                        <h4>المنتج/الخدمة</h4>
                        <h4>.1</h4>
                    </div>
                    <div className="white-border-design" data-aos="zoom-in-left" data-aos-duration="1400">
                        <h4>المنتج/الخدمة</h4>
                        <h4>.2</h4>
                    </div>
                    <div className="white-border-design" data-aos="zoom-in-left" data-aos-duration="1500">
                        <h4>....</h4>
                        <h4>.</h4>
                    </div>


                    <div className="flex-eight-content-item mt-4" data-aos="zoom-in-left" data-aos-duration="1300">
                            <h3>مجموعة (المنتج / الخدمة) </h3>
                            <h3>.2</h3>
                        </div>
                        <div className="white-border-design" data-aos="zoom-in-left" data-aos-duration="1400">
                        <h4>المنتج/الخدمة</h4>
                        <h4>.1</h4>
                    </div>
                    <div className="white-border-design" data-aos="zoom-in-left" data-aos-duration="1300">
                        <h4>المنتج/الخدمة</h4>
                        <h4>.2</h4>
                    </div>
                    <div className="white-border-design" data-aos="zoom-in-left" data-aos-duration="1300">
                        <h4>....</h4>
                        <h4>.</h4>
                    </div>

                       </div>
                    </div>
                </div>
                <div className="eighth-item">
                   <h6 data-aos="zoom-in-down" data-aos-duration="1300">التصنيف الأول</h6>
                    <div className="eighth-headline" data-aos="zoom-out">
                      <h5>نوع البلاغ</h5>
                    </div>
                   <div className="box-for-some-content" data-aos="zoom-in-left" data-aos-duration="1300" >
                    <h4>شكوى</h4>
                   </div>
                   <div className="box-for-some-content" data-aos="zoom-in-left" data-aos-duration="1400">
                    <h4>طلب</h4>
                   </div>

                   <div className="box-for-some-content" data-aos="zoom-in-down" data-aos-duration="left" data-aos-duration="1400">
                    <h4>استفسار</h4>
                   </div>
                </div>
             </div>
             <div className="eight_bottom_side_image text-center" data-aos="fade-up" data-aos-duration="1400">
                <img src={img11} alt="" />
             </div>
            </div>
        </div>
    );
};

export default EighthSlide;