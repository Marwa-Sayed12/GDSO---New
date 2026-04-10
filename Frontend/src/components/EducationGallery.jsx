import React, { useState, useContext } from 'react';
import { FaFemale, FaMale, FaTheaterMasks, FaGraduationCap, FaVideo, FaBuilding, FaHistory, FaTimes, FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { educationImages } from '../data/educationImages';
import '../styles/EducationGallery.css';
import '../media-query/edugallery.css';
import { LanguageContext } from '../context/LanguageContext';


const EducationGallery = () => {
  const [activeCategory, setActiveCategory] = useState('oldSchool');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { translations } = useContext(LanguageContext);


  const t = translations.EducationGallery;

  const galleryData = {
    oldSchool: {
      title: t.galleryTitles.oldSchool,
      icon: <FaHistory />,
      images: educationImages.oldSchool.images,
    },
    newSchool: {
      title: t.galleryTitles.newSchool,
      icon: <FaBuilding />,
      images: educationImages.newSchool.images,
    },
    girls: {
      title: t.galleryTitles.girls,
      icon: <FaFemale />,
      images: educationImages.girls.images,
    },
    boys: {
      title: t.galleryTitles.boys,
      icon: <FaMale />,
      images: educationImages.boys.images,
    },
    other: {
      title: t.galleryTitles.other,
      icon: <FaTheaterMasks />,
      images: educationImages.other.images,
    },
    videos: {
      title: t.galleryTitles.videos,
      icon: <FaVideo />,
      videos: [
    
      ],
    },
  };

  const categories = [
    { key: 'oldSchool', icon: <FaHistory /> },
    { key: 'newSchool', icon: <FaBuilding /> },
    { key: 'girls', icon: <FaFemale /> },
    { key: 'boys', icon: <FaMale /> },
    { key: 'other', icon: <FaTheaterMasks /> },
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
    <div className="education-gallery" >
      {/* Header */}
      <div className="education-header">
        <div className="education-header-left">
          <div className="education-header-icon">
            <FaGraduationCap />
          </div>
          <h1 className="education-header-title">{t.headerTitle}</h1>
        </div>
        
      </div>

      <div className="education-container">
        {/* Sidebar */}
        <div className="education-sidebar">
          <h3 className="education-sidebar-title">{t.sidebarTitle}</h3>
          <ul className="education-category-list">
            {categories.map((category) => {
              const categoryLabel = t.categories[category.key] || category.key;
              return (
                <li
                  key={category.key}
                  className={`education-category-item ${activeCategory === category.key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.key)}
                >
                  <span className="education-category-icon">{category.icon}</span>
                  <span className="education-category-label">{categoryLabel}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Gallery */}
        <div className="education-content">
          <div className="education-content-header">
            <div className="education-content-title">
              <span className="education-title-icon">{currentContent.icon}</span>
              <h2>{currentContent.title}</h2>
            </div>
          </div>

          {activeCategory === 'videos' ? (
            // Video Gallery
            currentContent.videos && currentContent.videos.length > 0 ? (
              <div className="education-videos-grid">
                {currentContent.videos.map((video) => (
                  <div key={video.id} className="education-video-card">
                    <div className="video-container">
                      <iframe
                        src={video.src}
                        title={video.title}
                        className="education-gallery-video"
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
              <div className="education-images-grid">
                {currentContent.images.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="education-image-card"
                    onClick={() => openLightbox(item, index)}
                  >
                    <img 
                      src={item.src} 
                      alt={`${currentContent.title} - ${t.image} ${item.id}`} 
                      className="education-gallery-image" 
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

export default EducationGallery;