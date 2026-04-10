import React, { useState, useContext } from 'react';
import { 
  FaBuilding,  
  FaVideo, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight,
  FaMosque,
  FaSchool,
  FaWater,
  FaHospital,
  FaCogs
} from 'react-icons/fa';
import { constructionImages } from '../data/constructionImages';
import '../styles/ConstructionGallery.css';
import '../media-query/consgalley.css';
import { LanguageContext } from '../context/LanguageContext';

const ConstructionGallery = () => {
  const [activeCategory, setActiveCategory] = useState('buildings');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { translations } = useContext(LanguageContext);

  const t = translations.ConstructionGallery;

  const galleryData = {
    buildings: {
      title: t.galleryTitles.buildings,
      icon: <FaMosque />, // Mosque icon for Omer Farooq Masjid
      images: constructionImages.buildings.images,
    },
    infrastructure: {
      title: t.galleryTitles.infrastructure,
      icon: <FaSchool />, // School icon for New Ansarullah School
      images: constructionImages.infrastructure.images,
    },
    interior: {
      title: t.galleryTitles.interior,
      icon: <FaMosque />, // Mosque icon for Abu-Bakr Siddiq Masjid
      images: constructionImages.interior.images,
    },
    interior2: {
      title: t.galleryTitles.interior2,
      icon: <FaCogs />, // Cogs icon for Work Flow
      images: constructionImages.interior2.images,
    },
    heavy: {
      title: t.galleryTitles.heavy,
      icon: <FaWater />, // Water icon for Water Supply Network
      images: constructionImages.heavy.images,
    },
    heavy2: {
      title: t.galleryTitles.heavy2,
      icon: <FaHospital />, // Hospital icon for Clinic
      images: constructionImages.heavy2.images,
    },
    videos: {
      title: t.galleryTitles.videos,
      icon: <FaVideo />,
      videos: [],
    },
  };

  const categories = [
    { key: 'buildings', icon: <FaMosque /> }, // Omer Farooq Masjid
    { key: 'infrastructure', icon: <FaSchool /> }, // New Ansarullah School
    { key: 'interior', icon: <FaMosque /> }, // Abu-Bakr Siddiq Masjid
    { key: 'interior2', icon: <FaCogs /> }, // Ansarullah School Work Flow
    { key: 'heavy', icon: <FaWater /> }, // Water Supply Network
    { key: 'heavy2', icon: <FaHospital /> }, // Saidabad District Clinic
    { key: 'videos', icon: <FaVideo /> },
  ];

  const currentContent = galleryData[activeCategory];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrev = () => {
    const images = currentContent.images;
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const images = currentContent.images;
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrev();
    if (e.key === 'ArrowRight') goToNext();
  };

  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage, currentIndex]);

  return (
    <div className="construction-gallery">
      {/* Header */}
      <div className="construction-header">
        <div className="construction-header-left">
          <div className="construction-header-icon">
            <FaBuilding />
          </div>
          <h1 className="construction-header-title">{t.headerTitle}</h1>
        </div>
      </div>

      <div className="construction-container">
        {/* Sidebar */}
        <div className="construction-sidebar">
          <h3 className="construction-sidebar-title">{t.sidebarTitle}</h3>
          <ul className="construction-category-list">
            {categories.map((category) => {
              const categoryLabel = t.categories[category.key] || category.key;
              return (
                <li
                  key={category.key}
                  className={`construction-category-item ${activeCategory === category.key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.key)}
                >
                  <span className="construction-category-icon">{category.icon}</span>
                  <span className="construction-category-label">{categoryLabel}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Gallery */}
        <div className="construction-content">
          <div className="construction-content-header">
            <div className="construction-content-title">
              <span className="construction-title-icon">{currentContent.icon}</span>
              <h2>{currentContent.title}</h2>
            </div>
          </div>

          {activeCategory === 'videos' ? (
            // Video Gallery
            currentContent.videos && currentContent.videos.length > 0 ? (
              <div className="construction-videos-grid">
                {currentContent.videos.map((video) => (
                  <div key={video.id} className="construction-video-card">
                    <div className="video-container">
                      <iframe
                        src={video.src}
                        title={video.title}
                        className="construction-gallery-video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-content-message">
                <div className="no-content-icon">
                  <FaVideo />
                </div>
                <p>{t.noVideos}</p>
              </div>
            )
          ) : (
            // Image Gallery
            currentContent.images && currentContent.images.length > 0 ? (
              <div className="construction-images-grid">
                {currentContent.images.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="construction-image-card"
                    onClick={() => openLightbox(item, index)}
                  >
                    <img 
                      src={item.src} 
                      alt={`${currentContent.title} - ${t.image} ${item.id}`} 
                      className="construction-gallery-image" 
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-content-message">
                <div className="no-content-icon">
                  {currentContent.icon}
                </div>
                <p>{t.noImages}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-lightbox" 
              onClick={closeLightbox}
              title={t.close}
              aria-label={t.close}
            >
              <FaTimes />
            </button>
            
            <img 
              src={selectedImage.src} 
              alt={t.fullView} 
              className="lightbox-image" 
            />
            
            {currentContent.images.length > 1 && (
              <div className="lightbox-nav">
                <button 
                  className="nav-btn" 
                  onClick={goToPrev}
                  title={t.prev}
                  aria-label={t.prev}
                >
                  <FaChevronLeft />
                </button>
                <button 
                  className="nav-btn" 
                  onClick={goToNext}
                  title={t.next}
                  aria-label={t.next}
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConstructionGallery;