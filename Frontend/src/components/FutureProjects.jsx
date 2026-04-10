import React, { useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../styles/consFuture.css";
import { LanguageContext } from "../context/LanguageContext";

const FuturePlans = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="futurePlans">
      {/* Section Header */}
      <div className="futurePlans-header">
        <h2 className="futurePlans-title">
          {translations.futureplan.title}
        </h2>
        <p className="futurePlans-description">
          {/* {translations.futureplan.description} */}
        </p>
      </div>

      {/* Plans List */}
      <div className="futurePlans-list">

        {/* Plan 1 */}
        <div className="futurePlans-card blue">
          <h3 className="futurePlans-cardTitle">
            {translations.futureplan.checkDamsTitle}
          </h3>

          <div className="futurePlans-location">
            <FaMapMarkerAlt />
            <span>{translations.futureplan.checkDamsLocation}</span>
          </div>

          <p className="futurePlans-cardText">
            {translations.futureplan.checkDamsDescription}
          </p>
        </div>

        {/* Plan 2 */}
        <div className="futurePlans-card teal">
          <h3 className="futurePlans-cardTitle">
            {translations.futureplan.coldStorageTitle}
          </h3>

          <div className="futurePlans-location">
            <FaMapMarkerAlt />
            <span>{translations.futureplan.coldStorageLocation}</span>
          </div>

          <p className="futurePlans-cardText">
            {translations.futureplan.coldStorageDescription}
          </p>
        </div>

        {/* Plan 3 */}
        <div className="futurePlans-card purple">
          <h3 className="futurePlans-cardTitle">
            {translations.futureplan.girlsSchoolTitle}
          </h3>

          <div className="futurePlans-location">
            <FaMapMarkerAlt />
            <span>{translations.futureplan.girlsSchoolLocation}</span>
          </div>

          <p className="futurePlans-cardText">
            {translations.futureplan.girlsSchoolDescription}
          </p>
        </div>

        {/* Plan 4 */}
        <div className="futurePlans-card orange">
          <h3 className="futurePlans-cardTitle">
            {translations.futureplan.mamloSchoolTitle}
          </h3>

          <div className="futurePlans-location">
            <FaMapMarkerAlt />
            <span>{translations.futureplan.mamloSchoolLocation}</span>
          </div>

          <p className="futurePlans-cardText">
            {translations.futureplan.mamloSchoolDescription}
          </p>
        </div>

      </div>
    </section>
  );
};

export default FuturePlans;
