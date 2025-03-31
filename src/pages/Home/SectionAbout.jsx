import CustomButton from "../../components/button/button";
import logo from "../../assets/images/pdm-completo-branco.png";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 py-12">
      <div className="w-full lg:w-[38rem] flex flex-col justify-center items-center gap-8">
        <p className="text-2xl text-justify font-extralight max-sm:w-80">
          O que esperar do governo que inicia um mandato? O que de fato será
          feito, quando e por quais meios? São perguntas legítimas dos cidadãos
          e que pedem um posicionamento claro do poder público. Esse
          posicionamento, em São Paulo, é apresentado à sociedade – e com a
          participação dela – na forma de um Programa de Metas quadrienal que
          sela definitivamente o compromisso do prefeito e de sua equipe com a
          população.
        </p>
        <p className="text-2xl text-justify font-extralight max-sm:w-80">
          Além de dar transparência às políticas prioritárias da Prefeitura, o
          PdM permite às diversas secretarias uma visão sistêmica da gestão que
          evita a sobreposição de medidas, otimiza recursos e facilita execuções
          em conjunto. Em seu escopo estão realizações tangíveis, mensuráveis,
          cabíveis em uma perspectiva de quatro anos.
        </p>
        <p className="text-2xl text-justify font-extralight max-sm:w-80">
          Internamente, é também uma ferramenta de monitoramento de ações e de
          análise de desempenho. Na medida em que traz a público essas
          avaliações, dá externamente, aos cidadãos, a possibilidade de
          fiscalizar a gestão e cobrar resultados, que devem ser, sempre que
          possível, não apenas atingidos, mas superados. O compromisso público
          que é a marca do Programa de Metas não é só com a execução: é com a
          execução eficiente e de qualidade.
        </p>
      </div>

      <div className="w-full lg:w-auto h-[27rem] flex flex-col justify-center items-center gap-8 px-4 py-8 rounded-2xl btn-dwnld">
        <CustomButton
          type="download"
          label="clique aqui para fazer  o download da versão inicial do PDM 2025-2028"
          target="/manual.pdf"
        />
        <img src={logo} alt="Logo do PDM" className="w-90 img-about" />
      </div>
    </div>
  );
}
