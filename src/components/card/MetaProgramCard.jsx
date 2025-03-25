import React from "react";

const MetaProgramCard = ({ program }) => {
  return (
    <div className="meta-card">
      <div className="meta-image-container">
        <img src={program.image} alt={program.title} className="meta-image" />
        <h3 className="meta-title">{program.title}</h3>
      </div>
      <div className="meta-divider"></div>
      <div className="flex flex-col flex-nowrap items-start justify-start gap-8 list-programademetas">
        <p className="text-2xl bold">DOCUMENTOS PARA DOWNLOAD</p>
        <ul className="list-metas">
          {program.docs.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      </div>
      <div className="meta-divider"></div>
    </div>
  );
};

export default MetaProgramCard;