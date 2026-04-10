import React from 'react';
import '../styles/CareerEmptyState.css';

const CareerEmptyState = ({ language = 'en' }) => {
  const content = {
    en: {
      mainText: 'No job openings at the moment',
      subText: 'Please check back later'
    },
    ps: {
      mainText: 'دا مهال کومې دندې نشته',
      subText: 'مهرباني وکړی وروسته راشی'
    },
    dr: {
      mainText: 'در حال حاضر هیچ موقعیت شغلی خالی نیست',
      subText: 'لطفاً بعداً مراجعه کنید'
    }
  };

  const currentContent = content[language] || content.en;

  return (
    <div className="career-empty">
      <div className="career-empty-content">
        <svg 
          className="career-icon" 
          viewBox="0 0 24 24" 
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 3L20 7M8 3L4 7"/>
        </svg>
        
        <p className="main-message">{currentContent.mainText}</p>
        <p className="sub-message">{currentContent.subText}</p>
      </div>
    </div>
  );
};

export default CareerEmptyState;