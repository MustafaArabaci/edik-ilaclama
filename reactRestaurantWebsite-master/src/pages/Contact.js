import React from "react";
import BannerBackground from "../assets/home-banner-background.png";

function Contact() {
  return (
    <div className="contact">
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
         
      </div>
      <div className="iletisim_no">Telefon No : +90 544 417 95 89</div>
    </div>
  );
}

export default Contact;
