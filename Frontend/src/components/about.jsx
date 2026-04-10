import { useContext } from 'react';
import "../styles/about.css";
import '../styles/home.css';
import "../media-query/about2.css";
import "../media-query/about1.css";

import { LanguageContext } from '../context/LanguageContext';
import "../media-query/about2.css";
import Footer from './footer';

import vision from '../Images/icon-logo/vision.png';
import mision from '../Images/icon-logo/mission.png';
import values from '../Images/icon-logo/values.png';

import impactImg from "../Images/ansarullah-workflow/ans (2).jpg";
import areasImg from "../Images/Girls/girl (3).jpg";
import goalImg from "../Images/eftetahya/eft (1).jpg";

import impactImg1 from "../Images/s.jpg";
import areasImg1 from "../Images/p.jpg";
import goalImg1 from "../Images/eftetahya/eft (1).jpg";

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const About = () => {

    const { translations } = useContext(LanguageContext);

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return (
    <div className="about-page">
      {/* Intro Banner */}
      
      <div className="about-banner">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">{translations.about["big-header"]}</h1>
        <div data-aos="fade-down" className="about-images-row">
  <img src={goalImg} alt="Community" />
  <img src={areasImg} alt="Education" />
  <img src={impactImg} alt="Farming" />
</div>


       
      </div>
      {/* <div className='div-banner' data-aos="fade-down">
        <p className="banner-p">
            {translations.about["first-p-about"]}
        </p>
        </div> */}

     
        

      {/* Our Story */}
      <section className="about-section text-only">
        <div className="about-content">
        
          <h3 data-aos="fade-left" >{translations.about["about-title"]}</h3>
          <div className="impact-underline-whoweare"></div>

          <p data-aos="fade-right">
          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#081F41" d="M53,-46.4C62.8,-29.9,61,-8.2,54.8,9.8C48.5,27.8,37.8,42.1,23.9,48.3C10,54.5,-7.2,52.6,-27.8,46.9C-48.3,41.1,-72.2,31.5,-80.2,13.4C-88.2,-4.6,-80.3,-31.2,-64.3,-49.1C-48.3,-67,-24.1,-76.3,-1.3,-75.2C21.5,-74.2,43.1,-62.9,53,-46.4Z" transform="translate(100 100)" />
</svg> */}
           {translations.about["about-p"]}
           
          </p>
        </div>
      </section>

      {/* Vision, Mission, Values */}
   
      <section className="vmv-wrapper">
      <div className="vmv-header" data-aos="fade">
        <h2 className="vmv-title">{translations.about.cultueTitle}</h2>
        <div className="vmv-divider" />
        <p className="vmv-description">
          {translations.about.culturep}
        </p>
      </div>

      <div className="vmv-cards" data-aos="fade-up">
        <div className="vmv-card-- mission">
          <h3>{translations.about.mission}</h3>
          <p>
          {translations.about.missionp}
          </p>
          <img
            src={mision}
            alt="Mission"
            className="vmv-img"
          />
        </div>
        <div className="vmv-card-- vision">
          <h3>{translations.about.vision}</h3>
          <p>
         {translations.about.visionp}
          </p>
          <img
             src={vision}
            alt="Vision"
            className="vmv-img"
          />
        </div>
        <div className="vmv-card-- values">
          <h3>{translations.about.values}</h3>
          <p>
           {translations.about.valuesp}
          </p>
          <img
             src={values}
            alt="Values"
            className="vmv-img"
          />
        </div>
      </div>
    </section>




      {/* Our Impact */}
      <section className="impact-section-about" data-aos="fade-up">
  <div className="impact-image">
    <img src={impactImg1} alt="Impact" />
  </div>

  <div className="impact-content">
    <div className="impact-left">
      <h3>{translations.about.impact}</h3>
      <div className="impact-underline"></div>
      {/* <p className="impact-subtitle">
        {translations.about.impactp}
        </p> */}
    </div>

    <div className="impact-right">
      <p>
       {translations.about.impactp}
      </p>
    </div>
  </div>
</section>



     {/* Areas We Serve */}
<section className="about-section area-section" data-aos="fade-right">
  <div className="about-image area-image">
    <img src={areasImg1} alt="Areas We Serve" />
  </div>
  <div className="about-content area-content">
    <h3>{translations.about.area}</h3>
    <div className="section-underline area-underline"></div>
    <p>{translations.about.areap}</p>
  </div>
</section>

{/* Future Goals */}
<section className="about-section future-section" data-aos="fade-left">
  <div className="about-content future-content">
    <h3>{translations.about.future}</h3>
    <div className="section-underline future-underline"></div>
    <p>{translations.about.futurep}</p>
  </div>
  <div className="about-image future-image">
    <img src={goalImg1} alt="Future Goals" className="future-img" />
  </div>
</section>

    <Footer/>
    </div>
  );
};

export default About;
