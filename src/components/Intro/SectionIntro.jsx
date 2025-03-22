import { useState } from "react";
import modalData from "../../data/modalContent.json";
import ModalAudiencias from "../modal/ModalAudiences";
import img_particeMais from "../../assets/images-svg/participe_mais.svg";

const Introducao = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Verifica se os dados da introdução estão carregados corretamente
  if (!modalData.introducao) {
    return <p>Erro: Dados não carregados corretamente.</p>;
  }

  return (
    <div className="introducao-container flex flex-col flex-nowrap justify-center items-center gap-20">
      <div>
        <h1 className="text-6xl">{modalData.introducao.titulo}</h1>
      </div>

      <div className="w-[45rem] text-justify text-[1.8rem] flex flex-col items-center justify-center gap-12">
        {modalData.introducao.paragraph?.map((paragraph, index) => (
          <p className="font-paragraph-audiences" key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      <div>
        <button className="btn-audiences" onClick={() => setIsModalOpen(true)}>
          Saiba mais sobre o processo participativo no PDM
        </button>
        <ModalAudiencias
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
      <div className="w-full h-[17rem] flex items-center justify-center flex-col flex-nowrap">
        <a href="https://exemplo.com" className="btn-audience-intro">
          <div className="image-container">
            <div>
                <img src={img_particeMais} alt="Descrição" />
            </div>
            <div>
                <p className="button-text text-center">ver processos participativos abertos no participe+</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Introducao;
