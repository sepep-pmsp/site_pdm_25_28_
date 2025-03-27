import CustomButton from "../../components/button/button";

import ArtboardEstatica from "../../assets/images-svg/Artboard_estatica.svg";
import ArtboardGira from "../../assets/images-svg/Artboard_que_gira.svg";

export default function Descrition() {
  return (
    <div className="flex flex-col justify-center flex-nowrap items-center w-full h-full gap-16 decoration-container">
      <div>
        <h3 className="text-3xl">
            O programa de metas 25/28 Construindo hoje a cidade do futuro. Mais
            inclusão, inovação e sustentabilidade para todos
        </h3>
      </div>
      <div className="flex flex-row flex-nowrap justify-around items-center px-4 py-8 gap-8 w-full">
            <div className="text-3xl bnt-saiba-pdm uppercase">
                <CustomButton
                    type="scroll"
                    label="Saiba mais Sobre o PDM"
                    target="sobre"
                />
                </div>

            {/* Imagens centralizadas */}
            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                {/* Imagem que gira */}
                <img
                    src={ArtboardGira}
                    alt="Imagem giratória"
                    className="absolute w-full h-full z-[-1]"
                />
                {/* Imagem estática */}
                <img
                    src={ArtboardEstatica}
                    alt="Imagem estática"
                    className="w-[200px] h-[200px] relative"
                />
            </div>

            <div className="btn-veja-pdm uppercase text-3xl">
                <CustomButton
                    type="scroll"
                    label="Veja as audiências públicas"
                    target="audiencias"
                />
            </div>
      </div>
    </div>
  );
}
