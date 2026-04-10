
import "../styles/agriculture.css";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import "../media-query/agriculture1.css";
// import "../media-query/agriculture2.css";



import { FaTint, FaSeedling, FaPeopleCarry } from "react-icons/fa";
import educationImg from '../Images/romi.jpg';
import selfDevImg from '../Images/romi2/romi (14).jpg';
import dropImg from '../Images/water/water (4).jpg';
import smallDropImg1 from '../Images/icon-logo/—Pngtree—water drop_9005662.png';
import smallDropImg2 from '../Images/icon-logo/—Pngtree—water drop_9005662.png';



import oliveicon from '../Images/tree/oliveicon.png';
import moringa from '../Images/tree/ar.png';
import mulberyy from '../Images/tree/tree-of-heaven-.png';
import anaricon from '../Images/tree/p.png';
import Footer from "./footer";

const Agriculture = () => {

   const { translations } = useContext(LanguageContext);


  return (
    <>
    <section className="agri-section">
      {/* Hero Section */}
      <div className="agri-hero">
        
  {/* Big Header Text on Hero Image */}
  <div className="agri-hero-text">
    <h1>{translations.agriculture.heroTitle}</h1>
  </div>


        <div className="agri-info-box">
          <div className="agri-info-item">
            <FaTint className="agri-info-icon" />
            {/* <img src={water} alt="img" className="agri-info-icon"/> */}
            <p>{translations.agriculture.infoWater}</p>



          </div>
          <div className="agri-info-item">
            <FaPeopleCarry className="agri-info-icon" />
            {/* <img src={water} alt="img" className="agri-info-icon"/> */}
           <p>{translations.agriculture.infoFamilies}</p>
          </div>
          <div className="agri-info-item">
            <FaSeedling className="agri-info-icon" />
            {/* <img src={water} alt="img" className="agri-info-icon"/> */}
            <p>{translations.agriculture.infoTrees}</p>
          </div>
        </div>
            

      </div>
    
    </section>

          {/* Tomato Sauce Program Section */}
<div className="sauce-program-section">
  <div className="sauce-images">
    <img src={educationImg} alt="Training" className="tomato-img-1" />
    <img src={selfDevImg} alt="Support" className="tomato-img" />
  </div>



  <div className="sauce-text">
    <h2>{translations.agriculture.sauceTitle}</h2>
    <p>
    <p>{translations.agriculture.sauceDesc}</p>
    </p>
  </div>
</div>


    {/* Sauce Making Steps Section */}
{/* <section className="sauce-steps-section">
  <h2 className="sauce-steps-title">{translations.agriculture.stepsTitle}</h2>

  <div className="sauce-steps-cards">
    {/* Step 1 */}
    {/* <div className="step-card">
      <div className="step-number">1</div>
      <img src={educationImg} alt="Washing Tomatoes" className="step-img" />
      <h3>{translations.agriculture.step1Title}</h3>
      <p>{translations.agriculture.step1Desc}

      </p>
    </div> */}

    {/* Step 2 */}
    {/* <div className="step-card">
      <div className="step-number">2</div>
      <img src={romi5} alt="Cooking" className="step-img" />
      <h3>{translations.agriculture.step2Title}</h3>
      <p>{translations.agriculture.step2Desc}</p>
    
    </div> */}

    {/* Step 3 */}
    {/* <div className="step-card">
      <div className="step-number">3</div>
      <img src={selfDevImg} alt="Storing Sauce" className="step-img" />
      <h3>{translations.agriculture.step3Title}</h3>
      <p>{translations.agriculture.step3Desc}</p>
    </div>
  </div> */}
    {/* </> */}
     {/* </section>  */}

{/* <section className="tomato-gallery-section">
  <h2 className="tomato-gallery-title">{translations.agriculture.galleryTitle}</h2>
  <div className="tomato-gallery-center">
    {[
      romi1, romi2, romi3, romi4, romi5,
      romi6, romi7, romi8, romi9, romi10
    ].map((imgSrc, index) => (
      <div
        key={index}
        className={`tomato-card ${index % 2 === 0 ? 'rotate-left' : 'rotate-right'}`}
      >
        <img src={imgSrc} alt={`Tomato ${index + 1}`} />
      </div>
    ))}
  </div>
</section> */}

<section className="water-services-section">
  <div className="water-content">

    {/* Left Drop-Shaped Images with PNG Background */}
    <div className="water-images">
      <div className="drop-bg-container">
        {/* Big center drop */}
        <img src={dropImg} alt="Main Water Drop" className="main-drop" />

        {/* Small top-left drop */}
        <img src={smallDropImg1} alt="Small Drop 1" className="small-drop top-left-drop" />

        {/* Small bottom-right drop */}
        <img src={smallDropImg2} alt="Small Drop 2" className="small-drop bottom-right-drop" />
      </div>
    </div>

    {/* Right Side Text */}
    <div className="water-text">
      <h2>{translations.agriculture.waterTitle}</h2>
      <p>
        {translations.agriculture.waterDesc}
        </p>

    <a href="construction" className="more-details-btn">
        {translations.agriculture.moreDetails}
      </a>
    </div>
    
  </div>
</section>

<section className="future-plantation-section">
  <h2 className="section-title future-title">{translations.agriculture.futureTitle}</h2>
  <h3 className="section-title future-title">{translations.agriculture.title}</h3>
  <p  className="section-intro future-intro">{translations.agriculture.intro}</p>
  <p  className="section-intro future-intro">{translations.agriculture.intro2}</p>
  <p  className="section-intro future-intro">{translations.agriculture.intro3}</p>
  <div className="plantation-grid">
    {/* Example cards - repeat with different images & text */}
    <div className="plant-card " id='almond'>
      <img src={require('../Images/tree/almond-tree.jpg')} alt="Almond Tree" />
      <h3>{translations.agriculture.almond}</h3>
      <p>
        {translations.agriculture.almondDesc}
      </p>
    </div>
    

    <div className="plant-card" id="olive">
    <img src={oliveicon} alt="olive" className="oliveicon"/>
      <h3>{translations.agriculture.olive}</h3>
      <p>
        {translations.agriculture.oliveDesc}
      </p>
      <img src={require('../Images/tree/olive.jpg')} alt="Olive Tree" />

    </div>

    <div className="plant-card" id="olive-1">
      <img src={require('../Images/tree/judas.jpg')} alt="Moringa Tree" />
      <img src={moringa} alt="olive" className="oliveicon"/>
      <h3>{translations.agriculture.moringa}</h3>
      <p>
        {translations.agriculture.judasDesc}
      </p>
    </div>

    <div className="plant-card" id="pomegrant">
      <img src={require('../Images/tree/Pistachio.jpg')} alt="Pomegranate Tree" />
      <img src={anaricon} alt="olive" className="oliveicon" id="anaricon"/>

      <h3>{translations.agriculture.pomegranate}</h3>
      <p>
        {translations.agriculture.pistachioDesc}
      </p>
    </div>

    <div className="plant-card" id="Mulberry">
      <img src={mulberyy} alt="olive" className="oliveicon smallimg" id="smallimg"/>

      <h3>{translations.agriculture.mulberry}</h3>
      <p>{translations.agriculture.heavenDesc}</p>
      <img src={require('../Images/tree/Tree-of-Heaven.jpg')} alt="Mulberry Tree" />

    </div>

    <div className="plant-card" id="anar">
      <img src={require('../Images/tree/ferula-asafoetida.jpg')} alt="Mulberry Tree" />
      <h3>{translations.agriculture.apple}</h3>
      <p>
        {translations.agriculture.hingDesc}
      </p>
    </div>
  </div>
</section>

    <Footer/>


  </>
  );
};

export default Agriculture;
