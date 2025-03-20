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
      const eixoEncontrado = eixosData.find((eixo) => eixo.url.toString() === eixoId);
      if (eixoEncontrado) {
        setSelectedEixo(eixoEncontrado);
      }
    }
  }, [searchParams]);

  return (
    <section className="py-12 flex items-center justify-center flex-nowrap">
      <div className="mx-auto px-4 flex flex-col items-center justify-center flex-nowrap w-full gap-12">
        <h2 className="text-3xl font-bold text-center mb-8">Eixos do PDM 2025-2028</h2>
        <div className="w-[50rem] div-eixo-texto ">
            <p className="text-3xl font-light text-justify eixo-texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ligula elit, ultricies nec lacinia quis, laoreet ac ex. Fusce malesuada molestie leo a varius. In et sem feugiat, ultricies dolor nec, fermentum nisi. Aliquam erat volutpat. Curabitur vel hendrerit ex, at pretium arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sit amet mauris tincidunt, imperdiet nisl eget, vehicula tellus. Proin tincidunt, nunc sed sollicitudin blandit, ex nisl tincidunt ligula, in scelerisque quam turpis nec elit. Maecenas vulputate blandit ligula ut vulputate. Maecenas luctus erat est, sodales sagittis enim volutpat porta. Cras tincidunt pellentesque ante ac auctor. Nullam sed eleifend felis. Morbi at eros nec turpis ullamcorper 
            </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex flex-wrap flex-row justify-center items-center gap-30">
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
