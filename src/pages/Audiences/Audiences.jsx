import Introducao from "../../components/Intro/SectionIntro";
import Table from "../../components/Table/Table";

function Audiences() {
  return (
    <div>
      <div className="section_Audiences_introduction">
        <Introducao />
      </div>
      <div>
        <div>
            <h2 className="text-5xl text-center h2-audience">audiências Gerais e Temáticas</h2>
        </div>
        <div>
          <Table type="tematicas" />
        </div>
      </div>
      <div>
        <div>
            <h2 className="text-5xl text-center h2-audience">audiências regionais</h2>
        </div>
        <div className="grid justify-items-center items-start grid-cols-[1fr_1fr] gap-6">
          <Table type="regionais1" />
          <Table type="regionais2" />
        </div>
      </div>
    </div>
  );
}

export default Audiences;
