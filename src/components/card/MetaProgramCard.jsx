import React from "react";

const MetaProgramCard = ({ program }) => {
  return (
    <div className="meta-card">
      <div className="meta-image-container">
        <img src={program.image} alt={program.date} className="meta-image" />
        <div className="meta-filter"></div>
        <div className="meta-content">
          <h3 className="meta-date">{program.date}</h3>
          <div className="meta-buttons">
            {program.docs?.metas && program.docs.metas.trim() !== "" && (
              <a href={program.docs.metas} download className="meta-button">
                Metas
              </a>
            )}
            {program.docs?.balanco && program.docs.balanco.trim() !== "" && (
              <a href={program.docs.balanco} download className="meta-button">
                Balanço
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaProgramCard;