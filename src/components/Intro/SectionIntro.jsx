import modalData from "../../data/modalContent.json";
import img_particeMais from "../../assets/svg/participe_mais.svg";
import BannerSecom from "../banner/banner_secom";
import Timeline from "./timeline";

const Introducao = () => {

  // Verifica se os dados da introdução estão carregados corretamente
  if (!modalData.introducao) {
    return <p>Erro: Dados não carregados corretamente.</p>;
  }

  return (
    <div className="introducao-container flex flex-col flex-nowrap justify-center items-center gap-20">
      <div>
        <h1 className="text-5xl">{modalData.introducao.titulo}</h1>
      </div>

      <div className="w-[45rem] text-justify text-[1.8rem] flex flex-col items-center justify-center gap-12">
        {modalData.introducao.paragraph?.map((paragraph, index) => (
          <p className="font-paragraph-audiences" key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="timeline flex flex-col flex-nowrap items-center justify-center gap-24">
        <div>
            <h2 className="text-4xl">Como são elaborados:</h2>
        </div>
        <div>
            <Timeline />
        </div>
      </div>
      <div className="w-full h-[17rem] flex items-center justify-center flex-col flex-nowrap">
        <a href="https://participemais.prefeitura.sp.gov.br/" className="btn-audience-intro" target="_blank">
          <div className="image-container">
            <div>
                <img src={img_particeMais} alt="Descrição" />
            </div>
            <div>
                <p className="button-text text-center text-3xl font-bold uppercase">contribua para o pdm</p>
            </div>
          </div>
        </a>
      </div>
      <div>
        <BannerSecom />
      </div>
    </div>
  );
};

export default Introducao;
