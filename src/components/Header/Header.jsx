import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import banner1 from '../../assets/images/banner/young-man-using-laptop-computer-phone.jpg'
import banner2 from '../../assets/images/banner/2nd.jpg'
import banner3 from '../../assets/images/banner/banner/3.jpg'
import banner4 from '../../assets/images/banner/banner/online-marketing.jpg'
import banner5 from '../../assets/images/banner/banner/slide5.jpg'
import banner6 from '../../assets/images/banner/banner/slide6.jpg'
import banner7 from '../../assets/images/banner/banner/slide7.jpg'
import banner8 from '../../assets/images/banner/banner/slide8.jpg'
import banner9 from '../../assets/images/banner/banner/banner9.jpg'
import banner10 from '../../assets/images/banner/banner/10.jpg'
import banner11 from '../../assets/images/banner/banner/last.jpg'


const Header = (handleToggleMinimize) => {
  const locations = [
    {
      id: 1,
      to: "/slide-1",
      text: "تقرير إدارة تجربة العميل",
<<<<<<< HEAD
      src: " /banner/1.jpg",
=======
      src: banner1,
>>>>>>> 1c09c6f9eca25f349a2fa34d2e5982f127ef8bd8
    },
    {
      id: 2,
      to: "/slide-2",
      text: "`مؤشرات الاداء`",
<<<<<<< HEAD
      src: " /banner/2nd.jpg",
=======
      src: banner2,
>>>>>>> 1c09c6f9eca25f349a2fa34d2e5982f127ef8bd8
    },
    {
      id: 3,
      to: "/slide-3",
      text: "صوت العميل",
<<<<<<< HEAD
      src: " /frame/3.jpg",
=======
      src: banner3,
>>>>>>> 1c09c6f9eca25f349a2fa34d2e5982f127ef8bd8
    },
    {
      id: 4,
      to: "/slide-4",
      text: "إدارة المنتجات`",
<<<<<<< HEAD
      src: " /banner/online-marketing.jpg",
=======
      src: banner4,
>>>>>>> 1c09c6f9eca25f349a2fa34d2e5982f127ef8bd8
    },
    {
      id: 5,
      to: "/slide-5",
      text: "`المهام التشغيلية`",
<<<<<<< HEAD
      src: " /banner/slide5.jpg",
=======
      src: banner5,
>>>>>>> 1c09c6f9eca25f349a2fa34d2e5982f127ef8bd8
    },
    {
      id: 6,
      to: "/slide-6",
      text: "موقع البنك",
<<<<<<< HEAD
      src: " /banner/slide6.jpg",
=======
      src: banner6,
>>>>>>> 1c09c6f9eca25f349a2fa34d2e5982f127ef8bd8
    },
    {
      id: 7,
      to: "/slide-7",
      text: "المتسوق الخفي",
<<<<<<< HEAD
      src: " /banner/slide7.jpg",
=======
      src: banner7,
>>>>>>> 1c09c6f9eca25f349a2fa34d2e5982f127ef8bd8
    },
    {
      id: 8,
      to: "/slide-8",
      text: "الفروع",
<<<<<<< HEAD
      src: " /banner/slide8.jpg",
=======
      src: banner8,
>>>>>>> 1c09c6f9eca25f349a2fa34d2e5982f127ef8bd8
    },
    {
      id: 9,
      to: "/slide-9",
      text: "التواصل",
<<<<<<< HEAD
      src: " /banner/banner9.jpg",
=======
      src: banner9,
>>>>>>> 1c09c6f9eca25f349a2fa34d2e5982f127ef8bd8
    },
    {
      id: 10,
      to: "/slide-10",
      text: " المشاركة المجتمعية",
<<<<<<< HEAD
      src: " /banner/10.jpg",
=======
      src: banner10,
>>>>>>> 1c09c6f9eca25f349a2fa34d2e5982f127ef8bd8
    },
    {
      id: 11,
      to: "/slide-11",
      text: "`برنامج ولاء العميل`",
<<<<<<< HEAD
      src: " /banner/last.jpg",
=======
      src: banner11,
>>>>>>> 1c09c6f9eca25f349a2fa34d2e5982f127ef8bd8
    },
  ];

  return (
    <div className={`transform-navbar`}>
      <div className="scroll-container">
        {locations.map((location) => (
          <Link
            key={location.id}
            to={location.to}
            className="slide-box"
            onClick={handleToggleMinimize}
          >
            <img src={location.src} alt={location.label} />
            <div
              style={{
                backgroundColor: "rgba(0,0,0,.3)",
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
            ></div>
            <p>{location.text}</p>
          </Link>
        ))}
        <Link
          key={12}
          to={`/slide-12`}
          className="slide-box"
          onClick={handleToggleMinimize}
        >
          <img src={` /banner/last-bg.jpg`} alt={`Slide11`} />
          <p>{`شكراً لكم`}</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
