import { useContext } from "react";
import { 
  FaTools, FaHardHat, FaBuilding,
  FaMapMarkerAlt, FaCheckCircle,  FaBuilding as FaBuildingIcon
} from "react-icons/fa";
import "../styles/construction.css";
import "../styles/consFuture.css";
import "../media-query/consFuture2.css";
import "../media-query/construction1.css";
import FutureProjects from "../components/FutureProjects";

import c1 from '../Images/Clinic 2/cli (11).jpg';
import c2 from  '../Images/Clinic 2/cli (12).jpg';

import c1card from  '../Images/Clinic 2/cli (13).jpg';


import omer from '../Images/omermasjid/omer (18).jpg';
import omer2 from '../Images/omermasjid/omer (23).jpg';

import omercard from '../Images/omermasjid/omer (32).jpg';

import ans1 from '../Images/New ansarullah/newAns (45).jpg';
import ans2 from '../Images/New ansarullah/newAns (31).jpg';

import ans1card from '../Images/New ansarullah/newAns (16).jpg';

import abu1 from '../Images/abubakar/abu (3).jpg';
import abu2 from '../Images/abubakar/abu (5).jpg';

import abu1card from '../Images/abubakar/abu (3).jpg';

import w1 from '../Images/water/water (1).jpg';
import w2 from '../Images/water/water (10).jpg';

import w1card from '../Images/water/water (1).jpg';




import { LanguageContext } from "../context/LanguageContext";
import Footer from "./footer";

function Construction() {
  const { translations} = useContext(LanguageContext);
  const t = translations.construction;

  // Use project names for feature cards with corresponding colors
  const featuresCards = [
    { key: "omermasjid", color: "#4CAF50", icon: "🕌" },
    { key: "ansarullahschool", color: "#FF9800", icon: "🏫" },
    { key: "abubakrsiddiqmosque", color: "#2196F3", icon: "🕌" },
    { key: "oldmosquewater", color: "#9C27B0", icon: "💧" },
    { key: "saidabadclinic", color: "#f68667ff", icon: "🏥" },
  ];

  const projectsList = [
    "omermasjid",
    "ansarullahschool",
    "abubakrsiddiqmosque",
    "oldmosquewater",
    "saidabadclinic",
  ];

  const projectImages = [
    [omer, omer2],
    [ans1, ans2],
    [abu1, abu2],
    [w1, w2],
    [c1, c2],
  ];

    const CardImages = [
    [omercard, ],
    [ans1card],
    [abu1card],
    [w1card],
    [c1card],
  ];

  // Updated Future Construction Projects Data - 4 projects with your data
  // const futureProjects = [
  //   {
  //     id: 1,
  //     key: "checkDams",
  //     titleKey: "checkDams",
  //     icon: <FaWater />,
  //     color: "#2196F3",
  //     gradient: "linear-gradient(135deg, #2196F3 0%, #0D47A1 100%)",
  //     location: "Wardak Province"
  //   },
  //   {
  //     id: 2,
  //     key: "coldStorage",
  //     titleKey: "coldStorage",
  //     icon: <FaSnowflake />,
  //     color: "#00BCD4",
  //     gradient: "linear-gradient(135deg, #00BCD4 0%, #00838F 100%)",
  //     location: "Agricultural Regions"
  //   },
  //   {
  //     id: 3,
  //     key: "girlsSchool",
  //     titleKey: "girlsSchool",
  //     icon: <FaSchool />,
  //     color: "#9C27B0",
  //     gradient: "linear-gradient(135deg, #9C27B0 0%, #6A1B9A 100%)",
  //     location: "Kajqala Village, Wardak"
  //   },
  //   {
  //     id: 4,
  //     key: "mamloSchool",
  //     titleKey: "mamloSchool",
  //     icon: <FaBuildingIcon />,
  //     color: "#FF9800",
  //     gradient: "linear-gradient(135deg, #FF9800 0%, #EF6C00 100%)",
  //     location: "Mamlo Village, Wardak"
  //   },
  // ];



  return (
    <section className="construction-section">
      {/* Hero Section */}
      <div className="construction-hero">
        <div className="construction-hero-text">
          <h1>{t.heroSection.heroTitle}</h1>
        </div>

        {/* Floating Info Box */}
        <div className="construction-info-box">
          <div className="construction-info-item">
            <FaTools className="construction-info-icon" />
            <p>{t.heroSection.modernTools}</p>
          </div>
          <div className="construction-info-item">
            <FaHardHat className="construction-info-icon" />
            <p>{t.heroSection.safetyFirst}</p>
          </div>
          <div className="construction-info-item">
            <FaBuilding className="construction-info-icon" />
            <p>{t.heroSection.strongInfrastructure}</p>
          </div>
        </div>
      </div>

      {/* Features Cards */}
      <div className="construction-cards">
        {featuresCards.map((card, index) => {
          const project = t.projects[card.key];
          const images = CardImages[index];
          return (
            <div key={index} className="construction-card" style={{ borderTop: `5px solid ${card.color}` }}>
              <img src={images[0]} alt={project.title} className="card-main-img" />
              <div className="card-overlay">
                <div className="overlay-left">
                  <div className="overlay-line" style={{ backgroundColor: card.color }}></div>
                  <div className="overlay-icon" style={{ color: card.color }}>
                    {card.icon}
                  </div>
                </div>
                <div className="overlay-text">
                  <h3>{project.title2}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modern Projects Section */}
      <div className="projects-details-container">
        <div className="section-header">
          <h2 className="section-title">{t.heroSection.consh1}</h2>
          {/* <p className="section-subtitle">{t.heroSection.consp}</p> */}
        </div>

        {projectsList.map((projectKey, index) => {
          const project = t.projects[projectKey];
          const images = projectImages[index];
          
          return (
            <div key={index} className="project-detail-modern">
              {/* Colorful left border */}
              <div className="project-left-border" style={{ backgroundColor: featuresCards[index % featuresCards.length].color }}></div>
              
              <div className="project-content-wrapper">
                {/* Title Section */}
                <div className="project-title-section">
                  <h2 className="project-detail-title">{project.title}</h2>
                  <div className="project-meta">
                    <span className="meta-item">
                      <FaMapMarkerAlt /> {project.location}
                    </span>
                    {/* <span className="meta-item">
                      <FaCalendarAlt /> {project.timeline}
                    </span>
                    <span className="meta-item">
                      <FaUsers /> {project.beneficiaries}
                    </span> */}
                  </div>
                </div>

                {/* Content Grid - Images Left, Text Right */}
                <div className="project-content-grid-modern">
                  {/* Left Column - Images */}
                  <div className="project-images-column">
                    <div className="main-image-container">
                      <img src={images[0]} alt={project.title} className="project-main-image" />
                    </div>
                    <div className="secondary-image-container">
                      <img src={images[1]} alt={project.title} className="project-secondary-image" />
                    </div>
                  </div>

                  {/* Right Column - Paragraphs */}
                  <div className="project-text-column">
                    <div className="paragraphs-container">
                      <div className="paragraph-card">
                        <div className="paragraph-icon">
                          <FaCheckCircle />
                        </div>
                        <div className="paragraph-content">
                          {/* <h4>Overview</h4> */}
                          <p>{project.paragraph1 || project.description}</p>
                        </div>
                      </div>

                      <div className="paragraph-card">
                        <div className="paragraph-icon">
                          <FaCheckCircle />
                        </div>
                        <div className="paragraph-content">
                          {/* <h4>Features & Facilities</h4> */}
                          <p>{project.paragraph2 || project.details}</p>
                        </div>
                      </div>

                      <div className="paragraph-card">
                        <div className="paragraph-icon">
                          <FaCheckCircle />
                        </div>
                        <div className="paragraph-content">
                          {/* <h4>Impact & Benefits</h4> */}
                          <p>{project.paragraph3}</p>
                        </div>
                      </div>
                    </div>

                    {/* Project Features */}
                    {/* <div className="project-features-modern">
                      <h3 className="features-title">{t.common.projectFeatures}</h3>
                      <div className="features-grid">
                        {t.features && Object.values(t.features)[index % Object.values(t.features).length] && (
                          <>
                            <div className="feature-item-modern">
                              <span className="feature-bullet" style={{ backgroundColor: featuresCards[index].color }}></span>
                              <span>{Object.values(t.features)[index % Object.values(t.features).length].feature1}</span>
                            </div>
                            <div className="feature-item-modern">
                              <span className="feature-bullet" style={{ backgroundColor: featuresCards[index].color }}></span>
                              <span>{Object.values(t.features)[index % Object.values(t.features).length].feature2}</span>
                            </div>
                            <div className="feature-item-modern">
                              <span className="feature-bullet" style={{ backgroundColor: featuresCards[index].color }}></span>
                              <span>{Object.values(t.features)[index % Object.values(t.features).length].feature3}</span>
                            </div>
                            <div className="feature-item-modern">
                              <span className="feature-bullet" style={{ backgroundColor: featuresCards[index].color }}></span>
                              <span>{Object.values(t.features)[index % Object.values(t.features).length].feature4}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
          <FutureProjects />
    
   <Footer/>
    </section>







  );
}

export default Construction;