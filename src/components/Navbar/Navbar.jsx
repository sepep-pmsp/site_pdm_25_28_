import { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/pdm-completo-branco.png";
import logo_prefeitura from "../../assets/logo/LOGOTIPO_PREFEITURA_HORIZONTAL_MONOCROMÁTICO_NEGATIVO.svg";

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false); // Estado para controlar o menu
  const menuRef = useRef(null); // Referência para o menu

  // Fechar o menu ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAberto(false); // Fecha o menu ao clicar fora
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Alterna o estado do menu (abre/fecha)
  const handleMenuToggle = () => {
    setMenuAberto((prev) => !prev);
  };

  // Fecha o menu ao clicar em um link
  const handleLinkClick = () => {
    setMenuAberto(false);
  };

  return (
    <nav className="bg-[var(--color-navy)] nav-bar-flex h-36 z-[7] relative">
      {/* Logo e botão do menu */}
      <div className="flex items-center gap-4 w-60 h-full">
        <img src={logo} alt="Logo PDM" className="w-70 h-auto" />
      </div>

      {/* Botão do menu para mobile */}
      <button
        className={`md:hidden text-white text-3xl transition-all duration-300 ${menuAberto ? "rotate-90" : ""}`}
        onClick={handleMenuToggle}
      >
        {menuAberto ? "×" : "☰"} {/* Mostrar o "X" ou o ícone de hambúrguer */}
      </button>

      {/* Menu Mobile */}
      <div
        ref={menuRef}
        className={`absolute top-16 left-0 w-full bg-[var(--color-navy)] p-4 flex flex-col gap-12 text-white text-3xl uppercase md:relative md:flex-row md:top-0 md:w-auto md:bg-transparent md:p-0 navbar-mobile transition-all duration-300 ${
          menuAberto ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <a
          href="#sobre"
          className="font-bold text-white"
          onClick={handleLinkClick}
        >
          Sobre o Programa
        </a>
        <a
          href="#audiencias"
          className="font-bold text-white"
          onClick={handleLinkClick}
        >
          Contribua para o PDM
        </a>
        <a
          href="#programas"
          className="font-bold text-white"
          onClick={handleLinkClick}
        >
          Programas Anteriores
        </a>

        {/* Logo da Prefeitura dentro do menu */}
        <div className="flex justify-center items-center mt-8 md:hidden">
          <img
            src={logo_prefeitura}
            alt="Logo da Prefeitura"
            className="h-16 w-auto"
          />
        </div>
      </div>

      {/* Logo da Prefeitura visível em desktop */}
      <div className="hidden md:block items-center gap-4 w-40 ml-auto">
        <img
          src={logo_prefeitura}
          alt="Logo da Prefeitura"
          className="h-auto w-60"
        />
      </div>
    </nav>
  );
};

export default Navbar;