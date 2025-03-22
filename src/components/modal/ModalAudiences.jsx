import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import modalData from "../../data/modalContent.json";

const ModalAudiencias = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [step, setStep] = useState(2);
  const [transitionClass, setTransitionClass] = useState(""); 

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

  const handleNextStep = () => {
    setTransitionClass("slide-in"); // Esquerda → Direita
    setTimeout(() => setStep(3), 400);
  };

  const handlePrevStep = () => {
    setTransitionClass("slide-out"); // Direita → Esquerda
    setTimeout(() => setStep(2), 400);
  };

  return (
    <div
      className={`modal-overlay-Audience ${isOpen ? "show" : ""}`}
      onClick={() => {
        setIsClosing(true);
        setTimeout(onClose, 300);
      }}
    >
      <div
        className={`modal-content-Audience ${isClosing ? "hide" : "show"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`step-container ${transitionClass}`}>
          {step === 2 && (
            <div key="step-2" className="step-content">
              <div className="grid-container">
                <div>
                  {modalData.passos.slice(0, 3).map((item, index) => (
                    <div className="flex flex-col items-start gap-8" key={index}>
                      <h1 className="text-3xl">{item.titulo}</h1>
                      <p className="text-xl padm-prgf">{item.texto}</p>
                    </div>
                  ))}
                </div>
                <div>
                  {modalData.passos.slice(3, 6).map((item, index) => (
                    <div className="flex flex-col items-start gap-8" key={index}>
                      <h1 className="text-3xl">{item.titulo}</h1>
                      <p className="text-xl padm-prgf">{item.texto}</p>
                    </div>
                  ))}
                </div>
                <button className="btn-model-audience" onClick={handleNextStep}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div key="step-3" className="step-content">
              <img src={modalData.imagem.src} alt={modalData.imagem.alt} />
              <button className="btn-model-audience" onClick={handlePrevStep}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ModalAudiencias.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalAudiencias;