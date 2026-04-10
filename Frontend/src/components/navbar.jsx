import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { SearchContext } from '../context/SearchContext';


import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import '../media-query/navbar.css';
import '../media-query/nav1.css';
import "../styles/search.css";
import "../styles/searchbox.css";
import "../media-query/searchbox1.css";


import imgg from '../Images/logooo.png';
import enFlag from '../Images/icon-logo/english.jpg';
import psFlag from '../Images/icon-logo/pashto.png';
import drFlag from '../Images/icon-logo/pashto.png';

const Navbar = () => {
  const { language, changeLanguage, translations } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
 const { searchQuery, setSearchQuery } = useContext(SearchContext);



  const languages = {
    ps: { flag: psFlag, name: 'پښتو' },
    dr: { flag: drFlag, name: 'دری' },
    en: { flag: enFlag, name: 'English' }
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsOpen(false);
  };


const searchItems = [
  // Main Pages
  { title: translations.navbar.home, link: "/" },
  { title: translations.navbar.about, link: "/about" },
  { title: translations.navbar.contact, link: "/contact" },
  { title: translations.navbar.donate, link: "/DonationButton" },
  { title: translations.home.Gallery, link: "/gallery" },

  // Programs
  { title: translations.navbar.Agriculture, link: "/agriculture" },
  { title: translations.navbar.Education, link: "/education" },
  { title: translations.navbar.Construction, link: "/construction" },

  // Education Highlights
  { title: "Winter Courses", link: "/education" },
  { title: "Girls Education", link: "/education" },

  // Construction Highlights
  { title: "Clean Drinking Water", link: "/construction" },
  { title: "Clinic Construction", link: "/construction" },
  { title: "School Construction", link: "/construction" },
  { title: "Masjid Projects", link: "/construction" },
];


const filteredItems = searchItems.filter(item =>
  item.title &&
  item.title.toLowerCase().includes(searchQuery.toLowerCase())
);




  return (
    <div className="navbar-container">
      {/* Top Section */}
      <div className="navbar-top">
        <div className="navbar-logo">
          <img src={imgg} alt="logo" className="logo" />
        </div>

        <div className="search-wrapper">
  <div className="search-box-container">
    <div className="search-icon-inside">
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </div>
    <input
      className="search-box"
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder={translations.navbar.searchPlaceholder || 'Search...'}
    />

    {searchQuery.trim().length > 1 && (
      <div className="search-dropdown">
        {filteredItems.length > 0 ? (
          <>
            {filteredItems.slice(0, 3).map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="search-dropdown-item"
                onClick={() => setSearchQuery("")}
              >
                {item.title}
              </Link>
            ))}

            <Link
              to="/search"
              className="search-view-all"
              onClick={() => setSearchQuery("")}
            >
              View all results →
            </Link>
          </>
        ) : (
          <div className="search-no-result">No results found</div>
        )}
      </div>
    )}
  </div>

  <div
    className="language-switcher"
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
  >
    
            <button className="dropdown-button">
              <img src={languages[language].flag} alt={language} className="flag-icon" />
              <span>{languages[language].name}</span>
              <span className="dropdown-icon">▼</span>
            </button>

            {isOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleLanguageChange('ps')}>
                  <img src={psFlag} alt="Pashto" className="flag-icon" />پښتو 
                </li>
                <li onClick={() => handleLanguageChange('dr')}>
                  <img src={drFlag} alt="Dari" className="flag-icon" /> دری
                </li>
                <li onClick={() => handleLanguageChange('en')}>
                  <img src={enFlag} alt="English" className="flag-icon" /> English
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="navbar-bottom">
        <div className="hamburger" onClick={() => document.querySelector('.navbar-links').classList.toggle('active')}>
  <span></span>
  <span></span>
  <span></span>
</div>

        <div className="navbar-links">
          <div className="nav-item">
            <Link to="/" className="hover-underline-animation">{translations.navbar.home}</Link>
          </div>

          <div className="nav-item">
            <Link to="/about" className="hover-underline-animation">{translations.navbar.about}</Link>
            {/* <ul className="submenu">
              <li><Link to="/about/mission">Our Mission</Link></li>
              <li><Link to="/about/team">Team</Link></li>
              <li><Link to="/about/history">History</Link></li>
            </ul> */}
          </div>

          <div className="nav-item">
          <Link className="hover-underline-animation nav-link"><span className="dropdown-icon2">▼</span>{translations.navbar.programs}</Link>
              <ul className="submenu">
              <li><Link to="/agriculture">{translations.navbar.Agriculture}</Link></li>
              <li><Link to="/education">{translations.navbar.Education}</Link></li>
              <li><Link to="/construction">{translations.navbar.Construction}</Link></li>
            </ul>
          </div>

          {/* <div className="nav-item">
            <Link to="/get-involved" className="hover-underline-animation">{translations.navbar.getInvolved}</Link>
            <ul className="submenu">
              <li><Link to="/get-involved/volunteer">Volunteer</Link></li>
              <li><Link to="/get-involved/member">Become a Member</Link></li>
            </ul>
          </div> */}

          <div className="nav-item">
            <Link to="/contact" className="hover-underline-animation">{translations.navbar.contact}</Link>
          </div>
        </div>

        <div className="navbar-right">
          <Link to="/DonationButton">
            <button className="donate-btn" >{translations.navbar.donate}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
