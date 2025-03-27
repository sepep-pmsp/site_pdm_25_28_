import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/card/card";
import Modal from "../../components/modal/modal";
import eixosData from "../../data/eixos.json";

const SectionEixos = () => {
  const [selectedEixo, setSelectedEixo] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOpenModal = (eixo) => {
    setSelectedEixo(eixo);
    setSearchParams({ eixo: eixo.url });
  };

  const handleCloseModal = () => {
    setSelectedEixo(null);
    setSearchParams({});
  };

  useEffect(() => {
    const eixoId = searchParams.get("eixo");
    if (eixoId) {
      const eixoEncontrado = eixosData.find(
        (eixo) => eixo.url.toString() === eixoId
      );
      if (eixoEncontrado) {
        setSelectedEixo(eixoEncontrado);
      }
    }
  }, [searchParams]);

  return (
    <section className="py-12 flex items-center justify-center flex-nowrap">
      <div className="mx-auto px-4 flex flex-col items-center justify-center flex-nowrap w-full gap-12">
        <h2 className="text-4xl font-bold text-center mb-8">
          Eixos do PDM 2025-2028
        </h2>
        <div className="w-[50rem] div-eixo-texto ">
          <p className="text-3xl font-light text-justify eixo-texto">
            São quatro eixos organizados de ações estratégicas para o próximo
            quadriênio. São pilares essenciais para a construção de uma cidade
            inclusiva. Os quatro eixos são complementares às demais diretrizes
            da gestão municipal.
          </p>
        </div>

        <div className="card-grid sm:grid-cols-2 md:grid-cols-3 lg:flex flex-wrap flex-row justify-center items-center gap-30">
          {eixosData.map((eixo) => (
            <Card
              key={eixo.id}
              imagem={eixo.imagem}
              cor={eixo.cor}
              onClick={() => handleOpenModal(eixo)}
            />
          ))}
        </div>
      </div>
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
