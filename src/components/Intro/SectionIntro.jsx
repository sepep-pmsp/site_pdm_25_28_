import { useState } from "react";
import modalData from "../../data/modalContent.json";
import ModalAudiencias from "../modal/ModalAudiences";

const Introducao = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="introducao-container">
      <h1>{modalData.introducao.titulo}</h1>
      <p>{modalData.introducao.texto}</p>
      <button onClick={() => setIsModalOpen(true)}>
        Saiba mais sobre o processo participativo no PDM
      </button>

      <ModalAudiencias isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Introducao;
