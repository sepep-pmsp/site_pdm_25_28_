import { useState } from 'react';
import logo from "../../assets/images-png/pdm-completo-branco.png";
import logo_prefeitura from "../../assets/logo/LOGOTIPO_PREFEITURA_HORIZONTAL_MONOCROMÁTICO_NEGATIVO.svg";

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="bg-[var(--color-navy)] nav-bar-flex h-36 z-[7]">
      {/* Logo e botão do menu */}
      <div className="flex items-center gap-4 w-60 h-full">
      <img src={logo} alt="Logo" className="w-70 h-auto"/>
      </div>

      {/* Botão do menu para mobile */}
      <button className="md:hidden text-[color:var(--color-white)]" onClick={() => setMenuAberto(!menuAberto)}>
        ☰
      </button>

      {/* Links de navegação */}
      <div
        className={`absolute top-16 w-[(20rem) !important] left-0 bg-[var(--color-navy)] gap-12 text-[20px] p-4 flex flex-col md:relative md:flex md:flex-row md:top-0 md:w-auto md:p-0 md:bg-transparent md:w-full navbar-mobile list-navbar ${!menuAberto && 'hidden'}`}
      >
        <a href="#sobre" className="text-[color:var(--color-white)!important] uppercase font-[bold]"><h2 className='text-3xl'>Sobre o Programa</h2></a>
        <a href="#audiencias" className="text-[color:var(--color-white)!important] uppercase font-[bold]"><h2 className='text-3xl'>Contribua para PDM</h2></a>
        <a href="#programas" className="text-[color:var(--color-white)!important] uppercase font-[bold]"><h2 className='text-3xl'>Programas Anteriores</h2></a>
      </div>

      {/* Logo da cidade (a ser definido) */}
      <div className="md:block flex items-center gap-4 w-40">
        <img src={logo_prefeitura} alt="Logo da Cidade" className="h-auto w-60" />
      </div>
    </nav>
  );
};

export default Navbar;