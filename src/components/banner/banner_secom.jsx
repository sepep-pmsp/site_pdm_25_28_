import bannerBg from "../../assets/svg/banner_da_SECOM.svg";

export default function BannerSecom() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-start w-full">
        <img
          src={bannerBg}
          alt="Banner da SECOM"
          className="w-[100vw] h-auto object-cover"
        />
      </div>
    </div>
  );
}
