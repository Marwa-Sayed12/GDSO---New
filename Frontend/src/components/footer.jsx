import { useContext} from 'react';
import '../styles/home.css';
import { LanguageContext } from '../context/LanguageContext';


const Footer = () => {
  const { translations } = useContext(LanguageContext);

  return (
 <footer className="footer-section">
   <div className="footer-container">
     <div className="footer-logo">
       <h2>{translations.home.gurbat}</h2>
       {/* <img src={g} alt='logo' className='g-logo'/> */}
       <p>{translations.home.gurbatp}</p>
     </div>
 
     <div className="footer-links-columns">
       <div className="footer-column">
         <h3>{translations.home.programs}</h3>
         <ul>
           <li><a href="education">{translations.home.eduu}</a></li>
           <li><a href="agriculture">{translations.home.agrii}</a></li>
           <li><a href="construction">{translations.home.cons}</a></li>

         </ul>
       </div>
       <div className="footer-column">
         <h3>{translations.home["Get Involved"]}</h3>
         <ul>
         <li><a href="contact">{translations.home["Contact Us"]}</a></li>
 
           <li><a href="gallery">{translations.home["Gallery"]}</a></li>
           <li><a href="DonationButton">{translations.home["Donate"]}</a></li>
           <li><a href="CareerEmptyState">{translations.home["Careers"]}</a></li>
           <li><a href="about">{translations.home["About Us"]}</a></li>
 
         
         </ul>
       </div>
     </div>
 
     <div className="footer-social">
       <h3>{translations.home["Follow Us"]}</h3>
       <div className="social-icons">
         <a href="https://www.facebook.com/share/14U64Y2wB2j/" target='blank'><i className="fab fa-facebook-f"></i></a>
         <a href="https://www.youtube.com/@Gurbat_Organization" target='blank'><i className="fab fa-youtube"></i></a>
         <a href="https://www.linkedin.com/company/106163501"><i className="fab fa-linkedin"></i></a>
       </div>
     </div>
   </div>
 
   <div className="footer-bottom">
     <p>&copy; {new Date().getFullYear()} {translations.home["copyright"]}</p>
   </div>
 </footer>
 
  );
};

export default Footer;