import Line from "../../components/line/line";
import About from "./SectionAbout";
import Description from "./description";
import Banner from "../../components/banner/banner";
import SectionEixos from "./SectionEixos";

export default function Home() {
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
    </div>
  );
}
