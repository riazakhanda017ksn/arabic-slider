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
      src: banner1,
    },
    {
      id: 2,
      to: "/slide-2",
      text: "`مؤشرات الاداء`",
      src: banner2,
    },
    {
      id: 3,
      to: "/slide-3",
      text: "صوت العميل",
      src: banner3,
    },
    {
      id: 4,
      to: "/slide-4",
      text: "إدارة المنتجات`",
      src: banner4,
    },
    {
      id: 5,
      to: "/slide-5",
      text: "`المهام التشغيلية`",
      src: banner5,
    },
    {
      id: 6,
      to: "/slide-6",
      text: "موقع البنك",
      src: banner6,
    },
    {
      id: 7,
      to: "/slide-7",
      text: "المتسوق الخفي",
      src: banner7,
    },
    {
      id: 8,
      to: "/slide-8",
      text: "الفروع",
      src: banner8,
    },
    {
      id: 9,
      to: "/slide-9",
      text: "التواصل",
      src: banner9,
    },
    {
      id: 10,
      to: "/slide-10",
      text: " المشاركة المجتمعية",
      src: banner10,
    },
    {
      id: 11,
      to: "/slide-11",
      text: "`برنامج ولاء العميل`",
      src: banner11,
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
          <img src={`/public/banner/last-bg.jpg`} alt={`Slide11`} />
          <p>{`شكراً لكم`}</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
