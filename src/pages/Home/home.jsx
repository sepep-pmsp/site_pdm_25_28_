import Line from "../../components/line/line";
import About from "./SectionAbout";
import Description from "./description";
import Banner from "../../components/banner/banner";
import SectionEixos from "./SectionEixos";
import Audiences from "../Audiences/Audiences";
import ProgramasMetasAnteriores from "../programa-metas/ProgramasMetasAnteriores";
import { useEffect } from "react";
import { scrollToSection } from "../../utils/scroll";

function Home() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Evita o salto direto
        const id = link.getAttribute("href").substring(1);
        scrollToSection(id);
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div>
      <div className="banner">
        <Banner />
      </div>
      <div className="container-description">
        <Description />
      </div>
      <div className="flex flex-nowrap items-center justify-center">
        <Line />
      </div>
      <div id="sobre" className="container-about">
        <About />
      </div>
      <div className="flex flex-nowrap items-center justify-center">
        <Line />
      </div>
      <div className="container-eixo">
        <SectionEixos/>
      </div>
      <div className="flex flex-nowrap items-center justify-center">
        <Line />
      </div>
      <div id="audiencias" className="container-audiences">
        <Audiences />
      </div>
      <div className="flex flex-nowrap items-center justify-center">
        <Line />
      </div>
      <div id="programas">
        <ProgramasMetasAnteriores />
      </div>
    </div>
  );
}

export default Home;