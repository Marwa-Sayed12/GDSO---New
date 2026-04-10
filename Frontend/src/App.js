import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import GetInvolved from './components/getinvolved';
import Programs from './components/programs';
import Contact from './components/contact';
import Agriculture  from './components/agriculture';
import Education from './components/education';
import Construction from './components/construction';
import GalleryDepartment from './components/GalleryDepartment';
import EducationGallery from "./components/EducationGallery";
import ConstructionGallery from './components/ConstructionGallery';
import AgricultureGallery from './components/AgricultureGallery';
import DonationButton from './components/DonationButton';
import FutureProjects from './components/FutureProjects';
import CareerEmptyState from './components/CareerEmptyState';

// import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        
        <Route path="/programs" element={<Programs />} />
        <Route path='/agriculture' element={<Agriculture  />} />
        <Route path='/education' element={<Education/>} />
        <Route path='/construction' element={<Construction/>} />
        <Route path="/gallery" element={<GalleryDepartment />} />       
        <Route path="/EducationGallery" element={<EducationGallery />} />
        <Route path="/ConstructionGallery" element={<ConstructionGallery />} />
        <Route path="/AgricultureGallery" element={<AgricultureGallery />} />
        <Route path="/DonationButton" element={< DonationButton/>} />
        <Route path="/FutureProjects" element={< FutureProjects/>} />
        <Route path="/CareerEmptyState" element={< CareerEmptyState/>} />


        </Routes>
      
    </Router>
  );
}

export default App;