import Line from "../../components/line/line";
import About from "../about/about";
import Description from "./description";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
