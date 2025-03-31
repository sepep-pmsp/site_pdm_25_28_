import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/card/card";
import Modal from "../../components/modal/modal";
import eixosData from "../../data/eixos.json";

const SectionEixos = () => {
  const [selectedEixo, setSelectedEixo] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const eixoId = searchParams.get("eixo");
    if (eixoId) {
      const eixoEncontrado = eixosData.find((eixo) => eixo.url === eixoId);
      if (eixoEncontrado) {
        setSelectedEixo(eixoEncontrado);
      }
    }
  }, [searchParams]);

  const handleOpenModal = (eixo) => {
    setSelectedEixo(eixo);
    setSearchParams({ eixo: eixo.url });
  };

  const handleCloseModal = () => {
    setSelectedEixo(null);
    setSearchParams({});
  };

  return (
    <section className="py-12 flex flex-col items-center justify-center w-full flex-eixos-geral">
      <div className="w-full max-w-6xl px-4 text-center flex-eixos">
        <h2 className="text-4xl font-bold mb-8">Eixos do PDM 2025-2028</h2>
        <p className="text-xl font-light text-justify max-w-3xl mx-auto max-sm:w-80">
          São quatro eixos organizados de ações estratégicas para o próximo
          quadriênio. São pilares essenciais para a construção de uma cidade
          inclusiva. Os quatro eixos são complementares às demais diretrizes da
          gestão municipal.
        </p>
      </div>

      {/* Grid responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 mt-12 w-full max-w-5xl">
        {eixosData.map((eixo) => (
          <Card
            key={eixo.id}
            imagem={eixo.imagem}
            cor={eixo.cor}
            onClick={() => handleOpenModal(eixo)}
            role="button"
          />
        ))}
      </div>

      {/* Modal */}
      {selectedEixo && (
        <Modal
          isOpen={!!selectedEixo}
          onClose={handleCloseModal}
          titulo={selectedEixo.titulo}
          descricao={selectedEixo.descricao}
          cor={selectedEixo.cor}
        />
      )}
    </section>
  );
};

export default SectionEixos;