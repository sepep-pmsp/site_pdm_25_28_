import bannerBg from "../../assets/images-svg/banner.svg";
import bannerFront from "../../assets/images-svg/prog_metas_colorido_sp.svg";

export default function Banner() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
      {/* Imagem de fundo */}
      <img
        src={bannerBg}
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Imagem em primeiro plano */}
      <img
        src={bannerFront}
        alt="Banner Foreground"
        className="relative w-2/3 md:w-1/2 max-w-md"
      />
    </div>
  );
}