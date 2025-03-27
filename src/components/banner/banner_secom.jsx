import bannerBg from "../../assets/images-svg/banner_da_SECOM.svg";


export default function BannerSecom() {
  return (
    <div className="relative w-full h-[700px] md:h-[600px] flex items-center justify-center">
      <img
        src={bannerBg}
        alt="Banner Background"
        className=""
      />
    </div>
  );
}