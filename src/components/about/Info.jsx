import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <h3 className="about__title">
          Experience
          <span className="about_subtitle">1 years learning</span>
        </h3>
      </div>

      <div className="about__box">
        <h3 className="about__title">
          Completed
          <span className="about_subtitle">48 + Projects</span>
        </h3>
      </div>

      <div className="about__box">
        <h3 className="about__title">
          Support
          <span className="about_subtitle">Online 24/7</span>
        </h3>
      </div>
    </div>
  );
};

export default Info;
