import React, { useContext } from 'react';
import '../styles/education.css';
import { LanguageContext } from '../context/LanguageContext';
import { MdBoy, MdGirl } from 'react-icons/md';
import {FaGraduationCap } from "react-icons/fa";
import { FaLanguage, FaShoppingCart, FaRobot } from "react-icons/fa";
import edu1 from '../Images/Boys/boys (19).jpg';
import edu2 from '../Images/Girls/girl (5).jpg';

import edu222 from '../Images/Boys/boys (24).jpg';

import edu3 from '../Images/Girls/girl (4).jpg';//two 5zolei rasta taraf

import edu11 from '../Images/Boys/boys (42).jpg';//futureplan
import edu22 from '../Images/Boys/boys (9).jpg'; //islamic course
import edu33 from '../Images/Boys/boys (25).jpg';//lang course

import "../media-query/education1.css";
import "../media-query/education2.css";
import Footer from './footer';




const Education = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <>
    <section className="education-section">
      <div className="education-hero">
        <div className="edu-hero-text">
        <h1>{translations.education.eduTitle}</h1>
        </div>

        
       <div className="edu-info-box">
                 <div className="edu-info-item">
                   <MdGirl  className="edu-info-icon" />
                   {/* <img src={water} alt="img" className="edu-info-icon"/> */}
                   <p>{translations.education.waterIcon}</p>
                 </div>
                 <div className="edu-info-item">
                   <MdBoy  className="edu-info-icon" />
                   {/* <img src={water} alt="img" className="edu-info-icon"/> */}
                   <p>{translations.education.farmerIcon}</p>
                 </div>
                 <div className="edu-info-item">
                   <FaGraduationCap className="edu-info-icon" />
                   {/* <img src={water} alt="img" className="edu-info-icon"/> */}
                   <p>{translations.education.tree}</p>
                 </div>
               </div>
      </div>
    </section>

  <section className="edu-extra-section">
      <h2 className="edu-section-title">{translations.education.eduh2}</h2>
      <p className="edu-section-paragraph">
        {translations.education.eduh2p}
      </p>

      <div className="edu-center-img-wrapper">
        <img src={edu1} alt="Students learning" className="edu-center-img" />
      </div>

      <p className="edu-section-paragraph">
        {translations.education.eduh2pp}
      </p>

      <div className="edu-two-img-wrapper">
        <img src={edu2} alt="Classroom activity" className="edu-img-small" />
        <img src={edu3} alt="Student interaction" className="edu-img-small" />
      </div>
    </section>

<section className="edu-courses-section">
  <h2>{translations.education.courseTitle}</h2>
  <p>
  {translations.education.courseTitlep}
  </p>

  {/* First row - 3 cards */}
  <div className="courses-grid">
    <div className="course-card">
      <img src={edu33} alt="English Course" />
      <h3>{translations.education.eng}</h3>
      <p>

        {translations.education.engp}
      </p>
      <span className="course-duration">{translations.education.mounth}</span>
    </div>

    <div className="course-card">
      <img src={edu222} alt="Computer Basics" />
      <h3>{translations.education.com}</h3>
      <p>

        {translations.education.comp}
      </p>
      <span className="course-duration">{translations.education.mounth}</span>
    </div>

    {/* <div className="course-card">
      <img src={edu1} alt="Art & Creativity" />
      <h3>{translations.education.art}</h3>
      <p>

        {translations.education.artp}
      </p>
      <span className="course-duration">{translations.education.mounth}</span>
    </div> */}
  </div>

  {/* Second row - 1 card + text */}
  <div className="course-feature">
    <div className="feature-card">
      <img src={edu22} alt="Special Winter Project" />
      {/* <h
      
      3>{translations.education.edu2}</h3> */}
    </div>
    <div className="feature-text">
      <h2>{translations.education.edu2h2}</h2>
      <p>
       {translations.education.edu2h2p}
      </p>
    </div>
  </div>
</section>


<section className="edu-highlights">
  <div className="edu-highlights-header">
    <h2>{translations.education.futureplan}</h2>
    <p>
      {translations.education.futureplanp}
    </p>
  </div>

  <div className="edu-highlights-container">
    {/* Left Image */}
    <div className="edu-highlights-image">
      <img src={edu11} alt="Education" />
    </div>

    {/* Right - Highlight Boxes */}
    <div className="edu-highlights-content">
      <div className="highlight-box">
        <FaGraduationCap className="highlight-icon" />
        <h3>{translations.education.kankor}</h3>
      </div>

      <div className="highlight-box">
        <FaLanguage className="highlight-icon" />
        <h3>{translations.education.engDiploma}</h3>
      </div>

      <div className="highlight-box">
        <FaShoppingCart className="highlight-icon" />
        <h3>{translations.education.bussiness}</h3>
      </div>

      <div className="highlight-box">
        <FaRobot className="highlight-icon" />
        <h3>{translations.education.ai}</h3>
      </div>
    </div>
  </div>
</section>

{/* New Details Section */}
<section className="edu-details">
  <div className="edu-detail">
    <h4>{translations.education.kankor}</h4>
    <p>
     {translations.education.kankorTitlep}
    </p>
  </div>

  <div className="edu-detail">
    <h4>{translations.education.engDiploma}</h4>
    <p>
     {translations.education.dipp}
    </p>
  </div>

  <div className="edu-detail">
    <h4>{translations.education.bussiness}</h4>
    <p>
    {translations.education.onlinep}
    </p>
  </div>

  <div className="edu-detail">
    <h4>{translations.education.ai}</h4>
    <p>
     {translations.education.aip}
    </p>
  </div>
</section>


<Footer/>




    </>
  );
};

export default Education;
