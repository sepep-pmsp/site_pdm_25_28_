import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import modalData from "../../data/modalContent.json";

const ModalAudiencias = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [step, setStep] = useState(2); // Agora começa no 2

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
        onClick={(e) => e.stopPropagation()}
      >
        {step === 2 && (
          <div className="grid-container">
            <div>
              {modalData.passos.slice(0, 3).map((item, index) => (
                <div key={index}>
                  <h1>{item.titulo}</h1>
                  <p>{item.texto}</p>
                </div>
              ))}
            </div>
            <div>
              {modalData.passos.slice(3, 6).map((item, index) => (
                <div key={index}>
                  <h1>{item.titulo}</h1>
                  <p>{item.texto}</p>
                </div>
              ))}
            </div>
            <button onClick={onClose}>Fechar</button>
            <button onClick={() => setStep(3)}>Avançar</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <img src={modalData.imagem.src} alt={modalData.imagem.alt} />
            <button onClick={() => setStep(2)}>Voltar</button>
          </div>
        )}
      </div>
    </div>
  );
};

ModalAudiencias.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalAudiencias;