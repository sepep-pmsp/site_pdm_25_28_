import React, { useState, useEffect } from "react";
import audienciasData from "../../data/audienciasData.json";
import "./table.css";

const Table = ({ type }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (audienciasData[type]) {
      setTableData(audienciasData[type]);
    }
  }, [type]);

  if (!tableData || tableData.length === 0) return <p>Dados não encontrados.</p>;

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr className="head-table">
            <th className="w-28">DATA</th><th className="w-28">HORA</th><th className="w-[25rem]">LOCAL</th>
            {type === "tematicas" ? <th className="w-40">TEMA</th> : <th className="w-40">STREAMING</th>}
            {type === "tematicas" && <th></th>}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr className="border-table" key={index}>
              <td className="w-28 prgf-td">{row.data}</td>
              <td className="w-28 prgf-td">{row.hora}</td>
              <td className="w-[25rem]">
                <span className="local">{row.local}</span> <br />
                {row.endereco}
              </td>
              {type === "tematicas" ? (
                <>
                  <td className="w-40">{row.tema}</td>
                  <td>
                    <a href={row.link} className="acessar-button btn-acessar">
                      Acesse <div className="streaming-button"><i className="fa-solid fa-arrow-right flecha"></i></div>
                    </a>
                  </td>
                </>
              ) : (
                <td>
                    <a href={row.streaming}>
                        <button className="streaming-button">
                            <i className="fa-solid fa-arrow-right flecha"></i>
                        </button>
                    </a>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
