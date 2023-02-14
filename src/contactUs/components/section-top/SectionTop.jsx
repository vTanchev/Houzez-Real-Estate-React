import React from "react";

import "./SectionTopStyle.css";

export const SectionTop = () => {
  return (
    <section className="section-top">
      <div className="section-top-overlay"></div>
      <div className="section-top-container">
        <div className="section-top-row">
          <div className="section-top-widget md:p-2.5 p-5">
            <h1 className="section-top-title">Contact us</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
