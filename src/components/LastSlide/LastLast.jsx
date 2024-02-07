import React from "react";
import logo from "../../assets/images/last/logo.svg";

const LastLast = () => {
  return (
    <div className="last_footer">
      <div
        className="text-end pt-5 container"
        data-aos="zoom-in-left"
        data-aos-duration="1200 "
      >
        <img src={logo} alt="" />
      </div>

      <div className="last-slie-text-heading">
        <div className="container text-end">
          <h2 data-aos="zoom-in-left" data-aos-duration="1700">
            شكراً لكم
          </h2>
        </div>
      </div>

      <div
        className="slide-contain-bg"
        data-aos="zoom-in-left"
        data-aos-duration="1800"
      ></div>
    </div>
  );
};

export default LastLast;
