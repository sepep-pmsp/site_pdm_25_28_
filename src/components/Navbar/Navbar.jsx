import { useState } from 'react';
import logo from "../../assets/icon/prog_metas_white.png";

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="bg-[var(--color-navy)] nav-bar-flex h-36">
      {/* Logo e botão do menu */}
      <div className="flex items-center gap-4 w-40">
      <img src={logo} alt="Logo" className="w-24 h-auto"/>
      </div>

      {/* Botão do menu para mobile */}
      <button className="md:hidden text-[color:var(--color-white)]" onClick={() => setMenuAberto(!menuAberto)}>
        ☰
      </button>

      {/* Links de navegação */}
      <div
        className={`absolute top-16 w-[(40rem) !important] left-0 bg-[var(--color-navy)] gap-12 text-[25px] p-4 flex flex-col md:relative md:flex md:flex-row md:top-0 md:w-auto md:p-0 md:bg-transparent md:w-full navbar-mobile list-navbar ${!menuAberto && 'hidden'}`}
      >
        <a href="#sobre" className="text-[color:var(--color-white)!important] uppercase font-[bold]">Sobre o Programa</a>
        <a href="#audiencias" className="text-[color:var(--color-white)!important] uppercase font-[bold]">Audiências Públicas</a>
        <a href="#programas" className="text-[color:var(--color-white)!important] uppercase font-[bold]">Programas Anteriores</a>
      </div>

      {/* Logo da cidade (a ser definido) */}
      <div className="md:block flex items-center gap-4 w-40">
        <img src="assets/images/logo_cidade.svg" alt="Logo da Cidade" className="h-10 w-24" />
      </div>
    </nav>
  );
};

export default Navbar;