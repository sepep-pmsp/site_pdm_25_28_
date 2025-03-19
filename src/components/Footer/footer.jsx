import logo from "../../assets/images-png/prog_metas-02.png";
import logo_prefeitura from "../../assets/logo/LOGOTIPO_PREFEITURA_HORIZONTAL_MONOCROMÁTICO_NEGATIVO.svg";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white h-60 py-6">
      <div className="flex flex-col md:flex-row flex-wrap justify-around items-center h-full footer-container px-4">
        <div className="flex justify-center mb-4 md:mb-0">
          <img
            className="w-40 md:w-70 h-auto"
            src={logo}
            alt="Logo do programa de metas 2025 a 2028 com as cores brancas"
          />
        </div>
        <div className="flex justify-center mb-4 md:mb-0">
          <img
            className="w-40 md:w-70 h-auto"
            src={logo_prefeitura}
            alt="Logo da Prefeitura de São Paulo com as cores brancas"
          />
        </div>
        <div className="break-all flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4 md:mb-0">
          <i className="fa-brands fa-github btn-github text-5xl md:text-[7rem]"></i>
          <p className="break-all font text-lg md:text-[33px]">código fonte no github</p>
        </div>
        <div className="break-all w-full md:w-65 px-4 text-center md:text-left">
          <p className="break-all font-bold uppercase text-lg md:text-[1.7rem] font">
            Esta página faz parte do compromisso com a transparência e
            participação cidadã.
          </p>
        </div>
      </div>
    </footer>
  );
}
