import CustomButton from "../../components/button/button";

import imageLogo from "../../assets/svg/prog_metas_sp_colorido.svg";

export default function Descrition() {
  return (
    <div className="flex flex-col justify-center flex-nowrap items-center w-full h-full gap-30 decoration-container">
      <div className="flex flex-col items-center flex-nowrap gap-8">
        <h3 className="text-4xl">
            O programa de metas 25/28 Construindo hoje a cidade do futuro.
        </h3>
        <h3 className="text-4xl">
            Mais inclusão, inovação e sustentabilidade para todos
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

            <div className="relative w-[28rem] h-full flex items-center justify-center">
                <img
                    src={imageLogo}
                    alt="Imagem estática"
                    className="w-[30rem] h-full relative"
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
