import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import '../styles/Gallerydepartement.css';

import educationImg from '../Images/Boys/boys (14).jpg';
import agricultureImg from '../Images/romi2/romi (1).jpg';
import constructionImg from '../Images/construction.jpg';

const GalleryDepartment = () => {
  const { translations } = useContext(LanguageContext);
  const t = translations.GalleryDepartment;

  const categories = [
    { 
      title: t.categories.education, 
      link: "/EducationGallery", 
      image: educationImg,
      key: 'education'
    },
    { 
      title: t.categories.agriculture, 
      link: '/AgricultureGallery', 
      image: agricultureImg,
      key: 'agriculture'
    },
    { 
      title: t.categories.construction, 
      link: '/ConstructionGallery', 
      image: constructionImg,
      key: 'construction'
    }
  ];
   
  return (
    <div className="gallery-dept-container">
      <h2 className="dept-title">{t.headerTitle}</h2>
      <div className="dept-cards">
        {categories.map((cat, index) => (
          <div className="dept-card" key={index}>
            <img src={cat.image} alt={cat.title} className="dept-image" />
            <div className="dept-card-content">
              <h3>{cat.title}</h3>
              <Link to={cat.link} className="dept-btn">{t.viewGallery}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryDepartment;