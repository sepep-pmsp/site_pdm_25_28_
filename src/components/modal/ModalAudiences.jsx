import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import modalData from "../../data/modalContent.json";

const ModalAudiencias = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [step] = useState(2);

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
        <div className={`step-container`}>
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
              </div>
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