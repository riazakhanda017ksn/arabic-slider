import React, { useState } from "react";
import "./map.css";
import LocationIcon from "./location"; // Replace with your actual location icon image
import { Link } from "react-router-dom";

const locations = [
  {
    id: 1,
    name: "Location 1",
    top: 100,
    left: 200,
    image: "/public/banner/banner.png",
    text: "تقرير إدارة تجربة العميل  ",
    link: "/",
  },
  {
    id: 2,
    name: "Location 2",
    top: 200,
    left: 500,
    image: "/public/banner/banner.png",
    text: "Description for Location 2",
    link: "/slide-2",
  },
  {
    id: 3,
    name: "Location 3",
    top: 300,
    left: 300,
    image: "/public/banner/banner.png",
    text: "Description for Location 3",
    link: "/slide-3",
  },
  {
    id: 4,
    name: "Location 4",
    top: 600,
    left: 200,
    image: "/public/banner/banner.png",
    text: "Description for Location 4",
    link: "/slide-4",
  },
  // Add more locations as needed
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
        style={{ top: location.top, left: location.left, cursor: "pointer" }}
        onMouseEnter={() => handleLocationHover(location.id)}
        onMouseLeave={() => handleLocationHover(null)}
      >
        <Link key={location.id} to={location.link}>
          <img
            src="/map-icon.png"
            alt="map-icon"
            style={{ height: "30px", width: "auto" }}
          />

          <div
            className={`location-info-box ${
              hoveredLocation === location.id ? "open" : ""
            }`}
            style={{
              top: "100%",
              left: 0,
              transform: "translateX(-43%)",
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
        <img src="" />
        {renderLocationIcons()}
      </div>
    </>
  );
};

export default Map;
