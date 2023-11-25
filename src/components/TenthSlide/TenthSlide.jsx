import React from 'react';
import './TenthSlide.scss'
import Slider from '../Slider/Slider';
const TenthSlide = () => {
    const h1 = `المتسوق الخفي`
    const h3 = ``
    const data =[
        {
            id:"04",
            post:"عدم وجود مسار واضح عند التواصل مع الرقم الموحد لتقديم الاستفسارات، حيث يتم الاستفسار من مسار الشكاوى."
        },
        {
            id:"03",
            post:`لا يتم توضيح وجود خطأ من قبل الرد الآلي عند إدخال (رقم الهوية) بشكل خاطئ. حيث يتم إعادة الصوت التفاعلي ولا يتضح للعميل هل تمت الإعادة بسبب وجود مشكلة في (خط الاتصال) أو أن هناك خطأ في (رقم الهوية المدخل).`
        },
        {
            id:"02",
            post:"تكرار طول وقت الانتظار حتى الوصول إلى ممثل الخدمة. إضافة إلى أن رقم الاتصال الخاص بالبنك غير مجاني ويتم احتساب تكلفة الاتصال على العميل."
        },
        {
            id:"01",
            post:"وجود مشكلة متكررة في الرقم الموحد للبنك. حيث تم مواجهة انقطاع في خط الاتصال بشكل تلقائي في بداية المكالمة."
        },
        {
            id:"08",
            post:"تكرار عدم التبليغ بالشكر والاعتذار بعد تنشيط وضع الانتظار أثناء المكالمة من قبل ممثلي الخدمة."
        },
        {
            id:"07",
            post:"تكرار ضعف التعاون واللباقة من قبل ممثلي خدمة العملاء في عملية تقديم الإجابات على استفسارات العملاء. إذ يتم التوجيه المستمر بالاطلاع على تفاصيل الخدمات التي يتم الاستفسار عنها من خلال الموقع الإلكتروني."
        },
        {
            id:"06",
            post:`ضعف الاحترافية في تقديم الخدمة من قبل ممثلي الخدمة, إضافة إلى ضعف مهارة الإنصات لاستفسارات العملاء. حيث تم السؤال عن اسم العميل أكثر من مرة , وعند التزويد برقم الهويه كان هناك رقم ناقص, لكن لم يتم ملاحظة ذلك.`
        },
        {
            id:"05",
            post:`تكرار الانتقال المباشر أو بعد عدة ثواني لممثل الخدمة عند التواصل مع الرقم الموحد بعد الساعة (3:00 م).`
        },

    ]
    return (
        <div>
            <Slider h1={h1} h3={h3}/>
            <div className="container">
            <div className="fourth-header my-5" data-aos="zoom-in-right" data-aos-duration="1200" >
                <h2 className='text-end'> أبرز المشاكل في الفروع  <span style={{color:"red"}}> 
                (التحديات)
               </span>
                </h2>
        </div>
        <div className="row">
            {
                data.map(item=>{
                    return (
                        <div className='col-lg-3' key={item.id} data-aos="zoom-in-right" data-aos-duration="1400">
                          <div className="single____item">
                            <h3>{item.id}</h3>
                            <p>{item.post}</p>
                          </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
            
        </div>
    );
};

export default TenthSlide;