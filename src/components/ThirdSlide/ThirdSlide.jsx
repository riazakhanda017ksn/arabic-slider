import React from 'react';
import './ThirdSlide.scss'
import frame from '../../assets/images/logo/frame.png'
import frame11 from '../../assets/images/frame/logo.png'
import leftLogo from '../../assets/images/logo/left-logo.png'
import rightLogo from '../../assets/images/logo/right-logo.png'
import frame1 from '../../assets/images/frame/1.png'
import frame2 from '../../assets/images/frame/2.png'
import frame3 from '../../assets/images/frame/3.png'
import mainFrame from '../../assets/images/frame/frame.png'
import mainFrame2 from '../../assets/images/frame/frame2.png'
import mainFrame3 from '../../assets/images/frame/slide.png'
import img1 from '../../assets/images/frame/11.png'
import img2 from '../../assets/images/frame/22.png'
import img3 from '../../assets/images/frame/33.png'
import img4 from '../../assets/images/frame/44.png'
import img5 from '../../assets/images/frame/55.png'
import img6 from '../../assets/images/frame/66.png'
import customImg from '../../assets/images/frame/1.svg'
import customImg2 from '../../assets/images/frame/2.svg'
import svg3 from '../../assets/images/frame/3.svg'
import gridimg from '../../assets/images/frame/grid-img.svg'
import svgicon from '../../assets/images/frame/svg.svg'
const ThirdSlide = () => {
    return (
        <div className='py-5 my-3'>
            <div className="container">
            <div className="third-navbar">
                <div className="navlink___">
                    <a href="">إدارة العمليات</a>
                    <a href="">بيئة تحليلية – مكعب طلبات</a>
                    <a href="">نظام رضى العميل</a>
                    <a href="" className='active'>المصادر:</a>
                </div>
                <div className="nav___logo">
               <h2> ملخص مؤشرات تجربة العملاء – <span>(التحديات)</span></h2>
                </div>
            </div>
             <div className="row mt-5 pt-4">
                <div className="col-lg-4">
                    <div className="box">
                        <div className="box-caption">
                            <h6>رفض طلبات التمويل بعد التقديم</h6>
                        </div>
                          <div className="box___border___">
                         <div className="box__content__flex">
                            <div className="text___">
                                <p>نصيب الفرد أو الالتزامات المالية من أكثر الأسباب الرفض في التمويل الاجتماعي. </p>
                                <p>الالتزامات المالية القائمة على المقترض أو الكفيل أبرز أسباب الرفض لتمويل العمل الحر.</p>
                            <p> انخفاض ملحوظ وممتاز في عدد الطلبات المرفوضة في تمويل منشآت</p>
                            </div>
                            <div className="icons___">
                             <img src={frame} alt="" />
                            </div>
                            </div>
                         </div>
                         <div className="flex____img_____">
                            <div className="text-left___">
                            <img src={leftLogo} alt="" />
                            </div>
                            <div className="text-end_____">
                            <img src={rightLogo} alt="" />
                            </div>
                         </div>
                         <div className="large___size___image text-center">
                            <img src={frame1} alt="" />
                         </div>
                         <div className="large___size___image text-center">
                            <img src={frame2} alt="" />
                         </div>
                         <div className="large___size___image text-center">
                            <img src={frame3} alt="" />
                         </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box">
                        <div className="box-caption">
                            <h6>المتقدمين للقروض من البوابة</h6>
                        </div>
                          <div className="box___border___">
                         <div className="box__content__flex">
                            <div className="text___">
                                <p>. النظام لا يدعم القيم الفريدة مما يؤدي الى عدم دقة المعلومات</p>
                                <p>. عدم اتاحة التعديل على النموذج مما ينتج عنه تعدد في الرفض والإلغاء وهو مما يؤثر على تجربة العميل.</p>
                            </div>
                            <div className="icons___">
                             <img src={frame} alt="" />
                            </div>
                            </div>
                         </div>
                         <div className="flex____img________">
                          <img src={mainFrame} alt="" />
                         </div>

                         <div className="flex-img-right____">
                          <img src={mainFrame2} alt="" />
                         </div>
                       
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box">
                        <div className="box-caption">
                            <h6>الخدمات الذاتية </h6>
                        </div>
                          <div className="box___border___">
                         <div className="box__content__flex">
                            <div className="text___">
                               <p>. ارتفاع مؤشر الرضا في خدمتين مقابل ستة خدمات، انخفاض طفيف في خدمة الخطاب المديونية وكشف الحساب، ولكن بمستوى ممتاز مقارنة بالخدمة المقدمة، كذلك تسبب تعطل النظام في حجب رؤية التقييم لباقي الخدمات.</p>
                            </div>
                            <div className="icons___">
                             <img src={frame11} alt="" />
                            </div>
                            </div>
                         </div>
                         <div className="flex____img______ text-center ">
                           <img src={mainFrame3} alt="" />
                         </div>
                         <div className="large___size___image text-center fleximg_____________">
                            <img src={img1} alt="" />
                         </div>
                         <div className="large___size___image text-center fleximg_____________">
                            <img src={img2} alt="" />
                         </div>
                         <div className="large___size___image text-center fleximg_____________">
                            <img src={img3} alt="" />
                         </div>
                         <div className="large___size___image text-center fleximg_____________">
                            <img src={img4} alt="" />
                         </div>
                         <div className="large___size___image text-center fleximg_____________">
                            <img src={img5} alt="" />
                         </div>
                         <div className="large___size___image text-center fleximg_____________">
                            <img src={img6} alt="" />
                         </div>
                    </div>
                </div>
                <div className="col-lg-4">
                  <div className="custom__card">
                     <img src={customImg} alt="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="custom__card">
                     <img src={customImg2} alt="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="custom__card">
                     <img src={svg3} alt="" />
                  </div>
                </div>

                <div className="col-lg-4">
                    <div className="box spacing need-more-height">
                        <div className="box-caption">
                            <h6>برنامج صوت العميل</h6>
                        </div>
                          <div className="box___border___">
                         <div className="box__content__flex">
                            <div className="text___">
                             <p>. التكامل مع الإدارات لتسهيل العقبات للوصول لتجربة العملاء التي نرجوها هو أولويتنا، نسعى لوضع الجميع على نفس الصفحة لفهم العميل ومراقبة تصرفاته والتمركز حوله</p>
                            </div>
                            <div className="icons___">
                             <img src={frame} alt="" />
                            </div>
                            </div>
                         </div>
                            
                           <div className="grid-container">
                              <div className="grid_box position-changing">
                                 <div className="grid___img text-end">
                                   <img src={gridimg} alt="" />
                                 </div>
                                 <p>تزويدنا بنصوص نتائج الإجراءات على طلبات العملاء في مرحلة المعالجة ليتم تحسينها</p>
                              </div>

                              <div className="grid_box position-changing">
                                 <div className="grid___img text-end">
                                   <img src={gridimg} alt="" />
                                 </div>
                                  <p>اعتماد سياسة تصنيف البلاغات وعكسها على CRM مشروع تطوير تصنيفات البلاغات</p>
                              </div>

                              <div className="grid_box">
                                 <div className="grid___img text-end">
                                   <img src={gridimg} alt="" />
                                 </div>
                                   <p>TATالتكامل مع إدارة العمليات في تطوير لوحة البيانات وتوضيح نسبة صحة اعتراض العميل على الرفض</p>
                              </div>

                              <div className="grid_box">
                                 <div className="grid___img text-end">
                                   <img src={gridimg} alt="" />
                                 </div>
                                   <p>توضيح حجم الزيارات بشكل تفصيلي للمنتجات بالموقع الإلكتروني</p>
                              </div>

                           </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="box spacing need-more-height">
                        <div className="box-caption">
                            <h6>أبرز الصعوبات وتصنيفها</h6>
                        </div>
                          <div className="box___border___">
                         <div className="box__content__flex">
                            <div className="text___">
                              <p>التعمق في تصنيف الصعوبات لمعرفة مشاكل العميل وحلها بالشكل المطلوب</p>
                              <p> المشاكل التشغيلية والتقنية المتكررة تجعل ضرورة إعطاء الأولوية لتحسين عمل الأنظمة واستجابتها لأعلى معايير تجربة المستخدم وهو ما يسهل على العملاء رحلتهم</p>
                            </div>
                            <div className="icons___">
                             <img src={frame} alt="" />
                            </div>
                            </div>
                         </div>
                            <div className="grid___parent">
                              <div className="grid-tag-line">
                                 <h5>إجرائية - تشغيلية</h5>
                                 <div className="grid-tag-line-paragraph">
                                    <p>التأخر بمعالجة طلبات الأسر المنتجة</p>
                                    <p>التأخر بالرد على اتصالات العملاء</p>
                                    <p>التأخر في صرف التمويل</p>
                                    <p>توثيق منتج زود الادخاري</p>
                                    <p>عدم وضوح أسباب الرفض</p>
                                 </div>
                              </div>
                              <div className="grid-tag-line">
                                 <h5>تقنية</h5>
                                 <div className="grid-tag-line-paragraph">
                                    <p>وجود مشاكل تقنية</p>
                                    <p>عطل فني في تعبئة العمل الحر</p>
                                    <p>حدوث مشكلة أثناء رفع الملفات خطأ</p>
                                 </div>
                              </div>

                              <div className="grid-tag-line border-delete">
                                 <h5>تشريعية</h5>
                                 <div className="grid-tag-line-paragraph">
                                    <p>شرط الالتزامات وحد الراتب والكفيل</p>
                                 </div>
                              </div>
                            </div>
                           
                    </div>
                </div>
                   
                <div className="col-lg-4">
                    <div className="box spacing need-more-height">
                        <div className="box-caption">
                           <h6>إحصائيات مراكز الدعم</h6>
                        </div>
                          <div className="box___border___">
                         <div className="box__content__flex">
                            <div className="text___">
                              <p>. الاستفسارات الأعلى هي عن مرحلة طلب تمويل والسياسات الائتمانية واللوائح وأسباب الرفض مشكلة تجربة مستخدم في نظام (LEN)</p>
                              <p>أهم أحد أسباب البلاغات هي الصعوبات والمشاكل التقنية.</p>
                            </div>
                            <div className="icons___">
                             <img src={frame} alt="" />
                            </div>
                            </div>
                         </div>

                         <div className="row-grid">
                           <div className="col-lg-grid">
                             <span>حجم البلاغات</span>
                             <div className="cols-flex">
                                <div className="col-one">
                                  <h6>الشكاوى</h6>
                                  <h3>5,733</h3>
                                </div>
                                <div className="col-two">
                                 <h6>طلب خدمة</h6>
                                 <h3>30,604</h3>
                                </div>
                             </div>
                             <div className="center-align-div">
                               <h5>استفسارات</h5>
                              <h3>40,688</h3>
                             </div>
                           </div>
                           <div className="col-lg-end-side text-end">
                              <span>حجم البلاغات</span>
                              <h6>إجمالي البلاغات</h6>
                              <h4><span>بلاغ</span>77,031</h4>
                              <h6 style={{color:"red",marginBottom:"12px"}}>إجمالي البلاغات</h6>
                              <img src={svgicon} alt="" />
                           </div>
                         </div>
                           
                    </div>
                </div>

             </div>
             {/* other rows */}
             <div className="other-headline-text">
               <h1 className="text-end mt-5">
               ملخص المشاريع – <span>(الحلول)</span>
               </h1>
             </div>
             {/*  */}
              <div className="row mt-5">
               <div className="col-lg-4">
                  <div className="more-grid">
                     <h6>الحلول</h6>
                     <p>. إضافة أدوات تتبع العميل داخل الموقع لمعرفة الخرائط الحرارية وطبيعة سلوكه داخل الموقع.</p>
                     <p>. يجري العمل على وضع سياسة تحسين رحلة العميل وسد الفجوات.</p>
                     <p>. تجري مراقبة الصعوبات بشكل يومي.</p>
                     <p>. إعادة النظر والحساب لنظام قياس تجربة العملاء باستبانات تقييم تغطي جميع مراحل المنتجات والخدمات.</p>
                     <p>. توحيد طريقة الرد على العملاء في منصة تويتر بحيث يتم إعطاء معلومات وافية لهم إن أمكن</p>
                     <p>. معالجة التأخر التشغيلية وتسهيلها على العملاء.</p>
                     <div className="padding-bottom____"></div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="more-grid">
                  <h6 style={{background:"red"}} >نقاط الألم</h6>
                  <p>. صعوبات تقنية في النظام تعيق تجربة العملاء.</p>
                  <p>. تحديات في التعامل مع استفسارات العملاء.</p>
                  <p>. التأخر في الإجراءات.</p>
                  </div>
                  <div className="more-grid mt-3">
                  <h6 >الانجازات</h6>
                  <p>. إطلاق موقع البنك بحلته الجديدة وبتجربة مستخدمين مازالت تحت الرصد.</p>
                  <p>. وضوح المحتوى، مع الترجمة الكاملة للموقع.</p>
                  <p>. زيادة سرعة تحميل الصفحة عن الربع السابق.</p>
                  <p>. ارتفاع مؤشر الرضى في خدمتين.</p>
                  <p>. إطلاق صفحة FAQ في الموقع الجديد لتكون مرجعاً للعملاء يغذي نقاط التواصل للخدمات والمنتجات.</p>
                  <p>. رسائل إتمام الخدمة.</p>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="side__bar">
                     <div className="sidebar____text___bg">
                        <h6>المشاريع والبرامج</h6>
                     </div>
                   
                  </div>
                  <div className="border-text__">
                        <p>التجهيز لمنصة الأسر المنتجة</p>
                        <span></span>
                     </div>
                   
                     <div className="border-text__">
                        <p>برنامج ولاء العملاء</p>
                        <span></span>
                     </div>

                       
                     <div className="border-text__">
                        <p>تحسين رحلة العملاء بالفروع</p>
                        <span></span>
                     </div>
                    
                     <div className="border-text__">
                        <p>برنامج المشاركة الالكترونية</p>
                        <span></span>
                     </div>

                     <div className="border-text__">
                        <p>تحسين تطبيق البنك</p>
                        <span></span>
                     </div>

                     <div className="border-text__">
                        <p>برنامج مجموعات التركيز</p>
                        <span></span>
                     </div>

                     <div className="border-text__">
                        <p>مشروع رحلات العميل</p>
                        <span></span>
                     </div>

                     <div className="border-text__">
                        <p>NPS خطة تنفيذية لدراسة نسبة العملاء المروجين</p>
                        <span></span>
                     </div>

                     <div className="border-text__">
                        <p>الانضمام لجائزة تجربة العميل السعودية</p>
                        <span></span>
                     </div>

                     <div className="border-text__">
                        <p>الاستعداد لليوم العالمي لتجربة العميل</p>
                        <span></span>
                     </div>

               </div>
              </div>
             {/*  */}
            </div>
        </div>
    );
};

export default ThirdSlide;