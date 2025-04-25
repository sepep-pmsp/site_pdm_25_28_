import CustomButton from "../../components/Button/button";
import imageLogo from "../../assets/svg/prog_metas_sp_colorido.svg";

export default function Descrition() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-12 lg:gap-24 px-4 py-12">

      <div className="flex flex-col lg:flex-row justify-center items-center gap-48 max-sm:gap-8 w-full">
        <div className="text-2xl sm:text-3xl bnt-saiba-pdm uppercase">
          <CustomButton
            type="scroll"
            label="Saiba mais Sobre o PDM"
            target="sobre"
          />
        </div>

        <div className="relative w-full sm:w-[28rem] h-[20rem] sm:h-full flex items-center justify-center">
          <img
            src={imageLogo}
            alt="Imagem estática"
            className="w-full sm:w-[30rem] h-full object-contain"
          />
        </div>

        <div className="text-2xl sm:text-3xl btn-veja-pdm uppercase">
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