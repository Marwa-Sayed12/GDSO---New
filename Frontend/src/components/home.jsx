import React, { useContext, useState, useEffect, useRef } from 'react';
import { FaArrowRotateRight } from "react-icons/fa6";
import { LanguageContext } from '../context/LanguageContext';

import Footer from './footer';

import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import projectsIcon from '../Images/icon-logo/projectsIcon.png'; 
import studentsIcon from '../Images/icon-logo/studentsIcon.png'; 
import constructionIcon from '../Images/icon-logo/constructionIcon.png'; 

import '../media-query/home-galley.css';
import '../styles/home.css';
import "../media-query/footer1.css";
import '../media-query/home.css';
import "../media-query/home2.css";
import "../media-query/home-about.css";


import home from '../Images/eftetahya/eft (5) (1).png';
import agricultureImg from '../Images/romi2/romi (222).jpg';
import educationImg from '../Images/Boys/boys (42).jpg';
import selfDevImg from '../Images/omermasjid/omer (29).jpg';

import edugif from '../Images/backgrounddesign/edu.gif';
import consgif from '../Images/backgrounddesign/cons.gif';
import agrigif from '../Images/backgrounddesign/agri.gif';


import agricultureImg1 from '../Images/romi2/romi (14).jpg';
import educationImg1 from '../Images/Boys/boys (21).jpg';
import selfDevImg1 from '../Images/omermasjid/omer (6).jpg';  

import img1 from '../Images/ansarullah-workflow/ans (33).jpg';
import img4 from '../Images/Boys/boys (15).jpg';

import vision from '../Images/icon-logo/vis.png';
import mission from '../Images/icon-logo/miss.png';
import values from '../Images/icon-logo/val.png';

import collage2 from '../Images/g1.png';
import collage3 from '../Images/g2.png';

// Simple lazy loading hook
const useLazyLoad = () => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, loaded];
};

// Simple Lazy Image Component that preserves all original styling
const LazyImage = ({ src, alt, className, style, ...props }) => {
  const [ref, loaded] = useLazyLoad();
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (loaded && !imgSrc) {
      setImgSrc(src);
    }
  }, [loaded, src, imgSrc]);

  return (
    <div ref={ref} className={className} style={{ ...style, minHeight: '50px', background: '#f5f5f5' }}>
      {imgSrc && (
        <img 
          src={imgSrc} 
          alt={alt} 
          className={className}
          style={{ ...style, width: '100%', height: '100%', objectFit: 'cover' }}
          {...props} 
        />
      )}
    </div>
  );
};

// For images that should load immediately (first slider image)
const NormalImage = ({ src, alt, className, ...props }) => {
  return <img src={src} alt={alt} className={className} {...props} />;
};

const Home = () => {
  const { translations } = useContext(LanguageContext);


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    className: "home-slider"
  };

  return (
    <div className="home">
      <Slider {...sliderSettings}>
        <div>
          {/* First image loads immediately */}
          <NormalImage src={home} alt="Slide 1" className="img-home" />
          <div className="slider-text-overlay">
            {translations.home.hoome}
          </div>
        </div>
        <div>
          <LazyImage src={agricultureImg} alt="Slide 2" className="img-home" />
          <div className="slider-text-overlay">
            {translations.home.agri}
          </div>
        </div>
        <div>
          <LazyImage src={educationImg} alt="Slide 3" className="img-home" />
          <div className="slider-text-overlay">
            {translations.home.edu}
          </div>
        </div>
        <div>
          <LazyImage src={selfDevImg} alt="Slide 4" className="img-home" />
          <div className="slider-text-overlay">
            {translations.home.self}
          </div>
        </div>
      </Slider>

      <div className="services">
        <h2 className="services-title">{translations.home["services-h2"]}</h2>
        <p className="services-description">{translations.home["services-p"]}</p>

        <div className="service-cards">
          <div className="card">
            <LazyImage src={agricultureImg1} alt="Agriculture" className="card-img" />
            <h3>{translations.home["Agriculture"]}</h3>
            <p>{translations.home["Agriculture-p"]}</p>
            <li className='link'>
              <Link to="/agriculture">
                {translations.home.link}
              </Link>
            </li>
          </div>

          <div className="card">
            <LazyImage src={educationImg1} alt="Education" className="card-img" />
            <h3>{translations.home["Education-h3"]}</h3>
            <p>{translations.home["Education-p"]}</p>
            <li className='link'>
              <Link to="/education">
                {translations.home.link}
              </Link>
            </li>
          </div>

          <div className="card">
            <LazyImage src={selfDevImg1} alt="construction" className="card-img" />
            <h3>{translations.home["self-h3"]}</h3>
            <p>{translations.home["self-p"]}</p>
            <li className='link'>
              <Link to="/construction">
                {translations.home.link}
              </Link>
            </li>
          </div>
        </div>
      </div>

      <div className="video-section">
        <p className="video-main-description">
          {translations.home["video-description"]}
        </p>
        <div className="video-container-wrapper">
          <div className="video-card">
            <div className="youtube-wrapper">
             <iframe width="560" height="315" src="https://www.youtube.com/embed/9CPAuaS_Ezg?si=HufWq2laDwicbsry" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

      <section className='impact-section'>
        <div className="impact-cards">
          <div className='impact-card'>
            <div className="card-inner">
              <div className="card-front">
                <div className="flip-hint">
                  <FaArrowRotateRight />
                </div>
                <NormalImage src={projectsIcon} alt='projects' className='impact-icon' />
                <p className='impact-text'>{translations.home.Projects}</p>
                <h3 className='impact-number'>{translations.home.num}</h3>
                <h3 className="impact-desc">{translations.home["impact-p"]}</h3>
              </div>
              <div className="card-back">
                <LazyImage src={agrigif} alt="Impact Detail" className="impact-back-img" />
              </div>
            </div>
          </div>

          <div className="impact-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="flip-hint">
                  <FaArrowRotateRight />
                </div>
                <NormalImage src={studentsIcon} alt="Students Icon" className="impact-icon" />
                <p className="impact-text">{translations.home["edu-impact"]}</p>
                <h3 className="impact-number">{translations.home["edu-num"]}</h3>
                <h3 className="impact-desc">{translations.home["edu-impact-p"]}</h3>
              </div>
              <div className="card-back">
                <LazyImage src={edugif} alt="Impact Detail" className="impact-back-img" />
              </div>
            </div>
          </div>

          <div className="impact-card">
            <div className="card-inner">
              <div className="card-front">
                <div className="flip-hint">
                  <FaArrowRotateRight />
                </div>
                <NormalImage src={constructionIcon} alt="Construction Icon" className="impact-icon" />
                <p className="impact-text">{translations.home["cons-impact"]}</p>
                <h3 className="impact-number">{translations.home["cons-impact-num"]}</h3>
                <h3 className="impact-desc">{translations.home["cons-impact-p"]}</h3>
              </div>
              <div className="card-back">
                <LazyImage src={consgif} alt="Impact Detail" className="impact-back-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-images">
            <div className="image-layout">
              <div className="img-container">
                <img src={img1} alt="About 1" className="img-large one" />
                <img src={img4} alt="About 4" className="img-large two" />
              </div>
            </div>
          </div>
          <div className="about-text">
            <h2>{translations.home.aboutUS}</h2>
            <p>{translations.home["about-p"]}</p>
          </div>
        </div>
      </section>

      <section className="vision-mission-values-section">
        <h2 className="section-title">{translations.home.vmvTitle}</h2>
        <div className="vmv-cards">
          <div className="vmv-card vision-card">
            <div className="vmv-image-circle">
              <img src={vision} alt="Vision" />
            </div>
            <h3 className="rtl-title">{translations.home.vTitle}</h3>
            <p className='vmv-p'>
              {translations.home.vp}
            </p>
          </div>

          <div className="vmv-card mission-card">
            <div className="vmv-image-circle">
              <img src={mission} alt="Mission" />
            </div>
            <h3 className="rtl-title">{translations.home.mTitle}</h3>
            <p className='vmv-p'>
              {translations.home.mp}
            </p>
          </div>

          <div className="vmv-card values-card">
            <div className="vmv-image-circle">
              <img src={values} alt="Values" />
            </div>
            <h3 className="rtl-title">{translations.home.valTitle}</h3>
            <p className='vmv-p'>
              {translations.home.valp}      
            </p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="gallery-title">{translations.home.galleyh2}</h2>
        <div className="gallery-grid">
          <div className="gallery-overlay-container">
            <img src={collage2} alt="Gallery" className="gallery-item" />
            <img src={collage3} alt="Gallery" className="gallery-item" />
            <div className="gallery-bottom-content">
              <h3>{translations.home.galleyh3}</h3>
              <p>{translations.home.galleryp}</p>
              <Link to="/gallery" className="gallery-btn">
                {translations.home.gallbtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;