import React, { useState, useContext } from 'react';
import { FaTree, FaVideo, FaChevronLeft, FaChevronRight, FaTimes, FaSeedling } from 'react-icons/fa';
import { agricultureImages } from '../data/agricultureImages';
import '../styles/AgricultureGallery.css';
import '../media-query/agrigalley.css';
import { LanguageContext } from '../context/LanguageContext';

const AgricultureGallery = () => {
  const [activeCategory, setActiveCategory] = useState('farming');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { translations } = useContext(LanguageContext);

  const t = translations.AgricultureGallery;

  const galleryData = {
    farming: {
      title: t.galleryTitles.farming,
      icon: <FaSeedling />, // Seedling icon
      images: agricultureImages.farming.images,
    },  
    videos: {
      title: t.galleryTitles.videos,
      icon: <FaVideo />,
      videos: [],
    },
  };

  const categories = [
    { key: 'farming', icon: <FaSeedling /> }, // Use 'farming' key
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
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrev();
    if (e.key === 'ArrowRight') goToNext();
  };

  if (selectedImage) {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }
}, [selectedImage, currentIndex]);

  return (
    <div className="agriculture-gallery">
      {/* Header */}
      <div className="agriculture-header">
        <div className="agriculture-header-left">
          <div className="agriculture-header-icon">
            <FaTree />
          </div>
          <h1 className="agriculture-header-title">{t.headerTitle}</h1>
        </div>
      </div>

      <div className="agriculture-container">
        {/* Sidebar */}
        <div className="agriculture-sidebar">
          <h3 className="agriculture-sidebar-title">{t.sidebarTitle}</h3>
          <ul className="agriculture-category-list">
            {categories.map((category) => {
              const categoryLabel = t.categories[category.key] || category.key;
              return (
                <li
                  key={category.key}
                  className={`agriculture-category-item ${activeCategory === category.key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.key)}
                >
                  <span className="agriculture-category-icon">{category.icon}</span>
                  <span className="agriculture-category-label">{categoryLabel}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Gallery */}
        <div className="agriculture-content">
          <div className="agriculture-content-header">
            <div className="agriculture-content-title">
              <span className="agriculture-title-icon">{currentContent.icon}</span>
              <h2>{currentContent.title}</h2>
            </div>
          </div>

          {activeCategory === 'videos' ? (
            // Video Gallery
            currentContent.videos && currentContent.videos.length > 0 ? (
              <div className="agriculture-videos-grid">
                {currentContent.videos.map((video) => (
                  <div key={video.id} className="agriculture-video-card">
                    <div className="video-container">
                      <iframe
                        src={video.src}
                        title={video.title}
                        className="agriculture-gallery-video"
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
              <div className="agriculture-images-grid">
                {currentContent.images.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="agriculture-image-card"
                    onClick={() => openLightbox(item, index)}
                  >
                    <img 
                      src={item.src} 
                      alt={`${currentContent.title} - ${t.image} ${item.id}`} 
                      className="agriculture-gallery-image" 
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

export default AgricultureGallery;