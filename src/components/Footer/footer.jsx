import logo from "../../assets/images/pdm-completo-branco.png";
import logo_prefeitura from "../../assets/logo/LOGOTIPO_PREFEITURA_HORIZONTAL_MONOCROMÁTICO_NEGATIVO.svg";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white py-6">
      <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-around md:items-center h-full footer-container px-4">
        
        {/* Logo PDM */}
        <div className="flex justify-center mb-6 md:mb-0">
          <img className="w-32 sm:w-40 md:w-70 h-auto" src={logo} alt="Logo do programa de metas 2025 a 2028 com as cores brancas" />
        </div>

        {/* Logo Prefeitura */}
        <div className="flex justify-center mb-6 md:mb-0">
          <img className="w-32 sm:w-40 md:w-70 h-auto" src={logo_prefeitura} alt="Logo da Prefeitura de São Paulo com as cores brancas" />
        </div>

        {/* GitHub e Código Fonte */}
        <div className="flex flex-col items-center md:flex-row md:items-center gap-4 md:gap-8 mb-6 md:mb-0">
          <a className="text-[white]" href="https://github.com/sepep-pmsp/site_pdm_25_28_"><i className="fa-brands fa-github btn-github text-4xl sm:text-5xl md:text-[7rem] text-[white]"></i></a>
        </div>

      </div>
    </footer>
  );
}