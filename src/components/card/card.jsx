import PropTypes from "prop-types";
import { useState } from "react";

const Card = ({ imagem, cor, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMobileClick = () => {
    if (window.innerWidth <= 768) {
      setIsHovered((prev) => !prev);
    }
  };

  return (
    <div
      className="border-4 rounded-lg cursor-pointer transition-all hover:scale-105 btn-eixos"
      style={{
        borderColor: cor,
        backgroundColor: isHovered ? cor : "transparent",
        transition: "all 0.2s ease-in-out",
      }}
      onClick={(e) => {
        handleMobileClick();
        onClick(e);
      }}
      onMouseEnter={() => window.innerWidth > 768 && setIsHovered(true)}
      onMouseLeave={() => window.innerWidth > 768 && setIsHovered(false)}
    >
      <img
        src={imagem}
        alt="Imagem do Eixo"
        className="w-100 h-auto rounded-lg transition-all"
        style={{
          filter: isHovered ? "brightness(0) invert(1)" : "none",
          transition: "all 0.2s ease-in-out",
        }}
      />
    </div>
  );
};

Card.propTypes = {
  imagem: PropTypes.string.isRequired,
  cor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;