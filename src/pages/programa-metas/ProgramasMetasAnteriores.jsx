import React from "react";
import MetaProgramsGrid from "../../components/grid/MetaProgramsGrid";

const ProgramasMetasAnteriores = () => {
  return (
    <div className="programas-metas-container">
      <h2 className="text-[3rem]">Programas de Metas Anteriores</h2>
      <p className="meta-description">
        O histórico dos Programas de Metas permite acompanhar a evolução dos
        compromissos assumidos pela Prefeitura ao longo dos anos. Aqui você pode
        acessar os documentos e consultar os principais resultados de cada
        gestão.
      </p>
      <MetaProgramsGrid />
    </div>
  );
};

export default ProgramasMetasAnteriores;
