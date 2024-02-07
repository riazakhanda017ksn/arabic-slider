import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const locations = [
    {
      id: 1,
      to: "/slide-1",
      label: "Slide1",
      src: "/public/banner/banner.png",
    },
    {
      id: 2,
      to: "/slide-2",
      label: "Slide2",
      src: "/public/banner/banner.png",
    },
    {
      id: 3,
      to: "/slide-3",
      label: "Slide3",
      src: "/public/banner/banner.png",
    },
    {
      id: 4,
      to: "/slide-4",
      label: "Slide4",
      src: "/public/banner/banner.png",
    },
    {
      id: 5,
      to: "/slide-5",
      label: "Slide5",
      src: "/public/banner/banner.png",
    },
    {
      id: 6,
      to: "/slide-6",
      label: "Slide6",
      src: "/public/banner/banner.png",
    },
    {
      id: 7,
      to: "/slide-7",
      label: "Slide7",
      src: "/public/banner/banner.png",
    },
    {
      id: 8,
      to: "/slide-8",
      label: "Slide8",
      src: "/public/banner/banner.png",
    },
    {
      id: 9,
      to: "/slide-9",
      label: "Slide9",
      src: "/public/banner/banner.png",
    },
    {
      id: 10,
      to: "/slide-10",
      label: "Slide10",
      src: "/public/banner/banner.png",
    },
    {
      id: 11,
      to: "/slide-11",
      label: "Slide11",
      src: "/public/banner/banner.png",
    },
  ];

  return (
    <div className={`transform-navbar `}>
      <div className="scroll-container">
        {locations.map((location) => (
          <Link key={location.id} to={location.to} className="slide-box">
            <img src={location.src} alt={location.label} />
            <p>{location.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
