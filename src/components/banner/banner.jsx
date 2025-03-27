import bannerBg from "../../assets/images/banner.jpg";
import bannerFront from "../../assets/images/pdm-completo-branco.png";

export default function Banner() {
  return (
    <div className="relative w-full h-[47.938rem] md:h-[47.938rem] flex items-center justify-center banner-image-container">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={bannerBg}
          alt="Banner Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-navy)] opacity-70"></div>
      </div>
      <img
        src={bannerFront}
        alt="Banner Foreground"
        className="relative w-[60rem]"
      />
    </div>
  );
}