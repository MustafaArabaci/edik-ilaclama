import React from "react";
import { Link } from "react-router-dom";
import "./image.css";
import Mosque from "../assets/abdulhamid-khan-1.jpg";
import mosque_2 from "../assets/mosque_2.png";
import hebele from "../assets/hebele.png";
import { FiArrowRight } from "react-icons/fi";
import AboutBackground from "../assets/about-background.png";
import BannerBackground from "../assets/home-banner-background.png";
import Aboutright from "../assets/about-background-Kopya.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          20 Yıllık Tecrübe
          </h1>
          <p className="primary-text">
          20 Yıllık Tecrübemiz İle Lider Firma Olarak, Sizinle Çalışmak İçin Sabırsızlanıyoruz! 
        
          </p>
          <Link to="/projeler">
            <button className="secondary-button">
              Çalışma Stillerimiz <FiArrowRight />{" "}
            </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img className="mosque" src={Mosque} alt="" />
        </div>
      </div>
      <div className="work-section-wrapper">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="work-section-top">
          <h1 className="primary-heading">
            Herşey Sizin İçin
          </h1>
        </div>
      </div>
      <div className="about-section-container">
        <div className="about-section-image-container">
          <img className="mosque" src={mosque_2} alt="" />
        </div>
        <div className="about-section-text-container">
          <h1 className="primary-heading">Alanında Uzman Ekip</h1>
          <p className="primary-text">
          Deneyimli ve uzman kadromuzla, Ev, Bahçe ve İş yerlerinizdeki haşere sorunlarıyla etkili bir şekilde başa çıkıyoruz. 
          </p>
          <p className="primary-text">
            Aynı Zaman'da Çim Biçme Fare & Akrep Vb Canlıların İlaçlamasını Yapıyoruz
          </p>
          <Link to="/hakkimizda">
            <button className="secondary-button">
              Hakkımızda <FiArrowRight />{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="work-section-wrapper">
        
        <div className="work-section-top">
          <h1 className="primary-heading"></h1>
          <p className="primary-text">
            
          </p>
        </div>
      </div>

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Daha Fazlası İçin Bize Ulaşın
          </h1>
          <p className="primary-text">

        
          </p>
          <Link to="/iletisim">
            <button className="secondary-button">
              Bize Ulaşmak İçin <FiArrowRight />{" "}
            </button>
          </Link>
        </div>
        <div className="home-image-section">
          <img className="mosque" src={hebele} alt="" />
        </div>
      </div>

    </div>
  );
}

export default Home;
