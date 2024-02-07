import React, { useState } from "react";
import "./map.css";
import LocationIcon from "./location"; // Replace with your actual location icon image
import { Link } from "react-router-dom";
const locations = [
  {
    id: 1,
    name: "Slide1",
    top: 40,
    left: 10,
    image: "/public/banner/1.jpg",
    text: "تقرير إدارة تجربة العميل",
    link: "/slide-1",
  },
  {
    id: 2,
    name: "Slide2",
    top: 32,
    left: 18,
    image: "/public/banner/2nd.jpg",
    text: "`مؤشرات الاداء`",
    link: "/slide-2",
  },
  {
    id: 3,
    name: "Slide3",
    top: -36,
    left: 27,
    bottom: 36,
    image: "/public/frame/3.jpg",
    text: "صوت العميل",
    link: "/slide-3",
  },
  {
    id: 4,
    name: "Slide4",
    top: 40,
    left: 35,
    image: "/public/banner/online-marketing.jpg",
    text: "إدارة المنتجات`",
    link: "/slide-4",
  },
  {
    id: 5,
    name: "Slide5",
    top: 87,
    left: 40,
    image: "/public/banner/slide5.jpg",
    text: "`المهام التشغيلية`",
    link: "/slide-5",
  },
  {
    id: 6,
    name: "Slide6",
    left: 25,
    image: "/public/banner/slide6.jpg",
    text: "موقع البنك",
    link: "/slide-6",
  },
  {
    id: 7,
    name: "Slide7",
    top: 10,
    left: 32,
    image: "/public/banner/slide7.jpg",
    text: "المتسوق الخفي",
    link: "/slide-7",
  },
  {
    id: 8,
    name: "Slide8",
    top: 32,
    left: 42,
    image: "/public/banner/slide8.jpg",
    text: "الفروع",
    link: "/slide-8",
  },
  {
    id: 9,
    name: "Slide9",
    top: 10,
    left: 54,
    image: "/public/banner/banner9.jpg",
    text: "التواصل",
    link: "/slide-9",
  },
  {
    id: 10,
    name: "Slide10",
    left: 42,
    image: "/public/banner/10.jpg",
    text: " المشاركة المجتمعية",
    link: "/slide-10",
  },
  {
    id: 11,
    name: "Slide11",
    left: 63,
    image: "/public/banner/last.jpg",
    text: "`برنامج ولاء العميل`",
    link: "/slide-11",
  },
];

const Map = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const handleLocationHover = (locationId) => {
    setHoveredLocation(locationId);
  };

  const renderLocationIcons = () => {
    return locations.map((location) => (
      <div
        key={location.id}
        className={` ${hoveredLocation === location.id ? "hovered" : ""} area`}
        style={{
          display: "absolute",
          top: `${location.top}%`,
          left: `${location.left}%`,
          right: `${location.right}`,
          bottom: `${location.bottom}`,
          cursor: "pointer",
        }}
        onMouseEnter={() => handleLocationHover(location.id)}
        onMouseLeave={() => handleLocationHover(null)}
      >
        <Link key={location.id} to={location.link}>
          <img
            src="/map-icon.png"
            alt="map-icon"
            style={{ height: "30px", width: "auto" }}
            className="map-icon"
          />

          <div
            className={`location-info-box ${
              hoveredLocation === location.id ? "open" : ""
            }`}
            style={{
              top: "100%",
              left: 0,
              transform: "translateX(-40%)",
              height: "140px",
              width: "200px",
              borderRadius: "5px",
              overflow: "hidden",
              border: "2px solid #3F8BC5",
              background: "white",
              visibility:
                hoveredLocation === location.id ? "visible" : "hidden",
              position: "absolute",
              zIndex: 999, // Ensure it appears on top of other elements
            }}
          >
            <img
              src={location.image}
              alt={`Location ${location.id}`}
              style={{ objectFit: "contain", height: "100%", width: "100%" }}
            />
            <p
              className="location-text"
              style={{ position: "absolute", color: "black" }}
            >
              {location.text}
            </p>
          </div>
        </Link>
      </div>
    ));
  };

  return (
    <>
      <div className="container-map">
        <img
          src="/src/assets/images/logo/right.png"
          style={{
            position: "fixed",
            left: "20px",
            bottom: "20px",
            height: "60px",
            width: "auto",
          }}
        />
        <img
          src="/src/assets/images/logo/left.png"
          alt=""
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            height: "60px",
            width: "auto",
          }}
        ></img>
        {renderLocationIcons()}
      </div>
    </>
  );
};

export default Map;
