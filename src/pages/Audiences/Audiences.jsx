import Introducao from "../../components/Intro/SectionIntro";
import CustomButton from "../../components/button/button";

function Audiences() {
  return (
    <div>
      <div className="section_Audiences_introduction">
        <Introducao />
      </div>
      <div className="flex items-center justify-center flex-nowrap">
        <div className="text-2xl sm:text-3xl btn-pdm-youtube uppercase">
          <CustomButton
            type="link"
            label="VEJA COMO FORAM AS AUDIÊNCIAS"
            target="https://www.youtube.com/playlist?list=PLy7hhEiqAY2ulthRvHOu1L0KC-u8heawZ"
          />
        </div>
      </div>
    </div>
  );
}

export default Audiences;