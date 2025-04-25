// src/components/LinkButton.jsx
import React from "react";

const RenderLinkButton = ({ link }) => {
  if (!link) return "-";

  const isYoutube = link.startsWith("https://youtu.be/");
  const iconClass = isYoutube ? "fa-caret-right" : "fa-arrow-right";
  const extraClass = isYoutube ? "play" : "flecha"; // só aplica 'flecha' se não for YouTube

  return (
    <a target="_blank" href={link} className="acessar-button btn-acessar">
      Acesse
      <div className="streaming-button">
        <i className={`fa-solid ${iconClass} ${extraClass}`}></i>
      </div>
    </a>
  );
};

export default RenderLinkButton;
