import modalData from "../../data/modalContent.json";
import img_particeMais from "../../assets/svg/participe_mais.svg";
import BannerSecom from "../banner/banner_secom";
import Timeline from "./timeline";

const Introducao = () => {
  if (!modalData.introducao) {
    return <p>Erro: Dados não carregados corretamente.</p>;
  }

  return (
    <div className="introducao-container flex flex-col items-center gap-6 md:gap-20 px-4">
      {/* Título */}
      <div>
        <h1 className="text-2xl md:text-5xl text-center">{modalData.introducao.titulo}</h1>
      </div>

      {/* Parágrafos */}
      <div className="w-full max-w-[90%] md:max-w-[45rem] text-justify text-lg md:text-[1.8rem] flex flex-col items-center gap-6 md:gap-12">
        {modalData.introducao.paragraph?.map((paragraph, index) => (
          <p className="font-paragraph-audiences" key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Timeline */}
      <div className="timeline flex flex-col items-center gap-12 md:gap-24">
        <h2 className="text-xl md:text-4xl text-center">Como são elaborados:</h2>
        <Timeline />
      </div>

      {/* Botão de contribuição */}
      <div className="w-full flex items-center justify-center flex-col">
        <a href="https://participemais.prefeitura.sp.gov.br/" className="btn-audience-intro" target="_blank">
          <div className="image-container flex flex-col items-center">
            <img src={img_particeMais} alt="Descrição" className="max-w-[80%] md:max-w-[40%]" />
            <p className="button-text text-center text-lg md:text-3xl font-bold uppercase">contribua para o pdm</p>
          </div>
        </a>
      </div>

      {/* Banner */}
      <div className="w-full overflow-x-auto">
        <BannerSecom />
      </div>
    </div>
  );
};

export default Introducao;