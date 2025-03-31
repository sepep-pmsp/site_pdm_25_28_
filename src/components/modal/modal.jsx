import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, titulo, descricao, cor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else if (isVisible) {
      setIsClosing(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
      }, 500);
    }
  }, [isOpen, isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`modal-overlay ${isOpen ? "show" : ""}`}
      onClick={() => {
        setIsClosing(true);
        setTimeout(onClose, 300);
      }}
    >
      <div
        className={`modal-content ${isClosing ? "hide" : "show"}`}
        style={{ borderColor: cor }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-5xl font-bold mb-4" style={{ color: cor }}>
          {titulo}
        </h2>

        {Array.isArray(descricao) ? (
          <ul className="ul-modal">
            {descricao.map((item, index) => (
              <li className="list-modal text-2xl" key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">{descricao}</p>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  cor: PropTypes.string.isRequired,
};

export default Modal;