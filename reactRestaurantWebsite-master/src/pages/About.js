import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import AboutBackground from "../assets/about-background.png";

function About() {
  return (
    <div className="about">
      <div className="aboutTop"></div>
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="aboutBottom">

        
         <li className="h1_about">
        1)  Deneyim ve Uzmanlık: Böcek ilaçlama şirketiniz, 20 Yıla dayanan deneyime sahip ve sektördeki en iyi uzmanlardan oluşan bir ekibe sahiptir. Bu uzmanlar, çeşitli zararlı böceklerle mücadelede uzmanlaşmış ve güvenilir çözümler sunmaktadır.

          </li>

          <li className="h1_about">
          2) Lisans ve Sertifikalar: Şirketiniz, böcek ilaçlama hizmetleri sunmak için gerekli tüm lisanslara ve sertifikalara sahiptir. Bu, müşterilere yasal gerekliliklere uygun hizmet aldıklarından emin olma konusunda güvence sağlar.

          </li>

          <li className="h1_about">
          3)  Çevre Dostu Yaklaşım: Şirketiniz, böcek ilaçlama işlemlerini gerçekleştirirken çevreye duyarlı yaklaşımlar benimsemektedir. Etkili çözümler sunarken, doğal yaşamı ve insan sağlığını korumaya özen gösterir.

          </li>

          <li className="h1_about">
          4) Müşteri Memnuniyeti: Şirketiniz, müşteri memnuniyetine büyük önem verir. Profesyonel ve dostane hizmet sunarak, müşterilerinizin ihtiyaçlarına uygun çözümler sunar ve sorularını yanıtlamak için her zaman hazır bir ekip bulundurur.

          </li>

          <li className="h1_about">
          5) Çeşitli Hizmetler: Firmamız, Çim Biçme , Bağ & Bahçe İlaçlama , Ev Ve İşyeri İlaçlama , Dezenfeksiyon , Fare , Akrep , Pire , Sinek ,Hamam Böceği vb Benzeri Haşerelerin Tamamını Yapmaktayız.

          </li>

          <li className="h1_about">
          6) Ekipman ve Teknoloji: Firmamız, sektördeki en son ekipman ve teknolojiyi kullanarak etkili ve verimli hizmetler sağlar. Bu sayede işlemler daha hızlı ve daha etkili bir şekilde gerçekleştirilir.
                       </li>
                    
           <li className="h1_about">
          7) Rekabetçi Fiyatlar: Firmamız, kaliteli hizmetlere uygun ve rekabetçi fiyatlarla ulaşmayı hedefler.
          </li>
      </div>
      </div>
  );
}

export default About;
