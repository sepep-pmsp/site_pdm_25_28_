import CustomButton from "../../components/button/button";
import logo from "../../assets/images-png/pdm-completo-branco.png";

export default function About() {
  return (
    <div className="flex items-center justify-evenly flex-nowrap flex-row">
      <div className="w-[38rem] flex flex-col justify-center items-center gap-8">
        <p className="text-xl">
          O Programa de Metas 2025-2028 representa um compromisso estratégico da
          gestão municipal com a população. Ele estabelece objetivos claros,
          alinhados às demandas sociais, para promover desenvolvimento
          sustentável, eficiência administrativa e qualidade de vida para os
          cidadãos.
        </p>
        <p className="text-xl">
          Composto por eixos temáticos definidos a partir da participação
          popular, o plano orienta investimentos prioritários e ações
          estruturantes em áreas fundamentais, garantindo maior transparência e
          previsibilidade nas políticas públicas.
        </p>
        <p className="text-xl">
          A metodologia adotada busca integração entre setores, otimização de
          recursos e acompanhamento contínuo dos indicadores. Dessa forma, o
          Programa de Metas se torna um instrumento essencial para monitoramento
          e avaliação dos compromissos assumidos pela administração municipal.
        </p>
      </div>
      <div className="w-auto h-[27rem] flex flex-col flex-nowrap justify-center items-center gap-20 px-4 py-8 rounded-2xl btn-dwnld">
        <CustomButton type="download" label="clique aqui para fazer  o download da versão inicial do PDM 2025-2028 " target="/manual.pdf" />
        <img src={logo} alt="" className="w-90 img-about" />
      </div>
    </div>
  );
}
