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
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location.id === selectedLocation ? null : location.id);
  };

  const renderLocationIcons = () => {
    return locations.map((location) => (
      <div
        key={location.id}
        className={`location-icon ${
          selectedLocation === location.id ? "selected" : ""
        } area`}
        style={{ top: location.top, left: location.left }}
        onClick={() => handleLocationClick(location)}
      >
        <LocationIcon />
      </div>
    ));
  };

  const renderLocationInfoBoxes = () => {
    return locations.map((location) => (
      <Link key={location.id} to={location.link}>
        <div
          className={`location-info-box ${
            selectedLocation === location.id ? "open" : ""
          }`}
          style={{
            top: location.top,
            left:
              selectedLocation === location.id ? location.left + 40 : "auto",
          }}
        >
          <img src={location.image} alt={`Location ${location.id}`} />
          <p className="title">{location.text}</p>
        </div>
      </Link>
    ));
  };

  return (
    <>
      <div className="container-map">
        {renderLocationIcons()}
        {renderLocationInfoBoxes()}
      </div>
    </>
  );
};

export default Map;
