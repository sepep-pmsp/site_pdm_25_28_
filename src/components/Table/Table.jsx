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

  if (!tableData || tableData.length === 0)
    return <p className="text-center text-gray-500">Dados não encontrados.</p>;

  return (
    <div className="table-wrapper">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="head-table">
              <th className="w-24 sm:w-28 text-base sm:text-xl">DATA</th>
              <th className="w-24 sm:w-28 text-base sm:text-xl">HORA</th>
              <th className="w-[20rem] sm:w-[25rem] text-base sm:text-xl">LOCAL</th>
              {type === "tematicas" ? (
                <th className="w-24 sm:w-30 text-base sm:text-xl">TEMA</th>
              ) : (
                <th className="w-40 sm:w-50 text-base sm:text-xl">LINK PARA REUNIÃO</th>
              )}
              {type === "tematicas" && <th></th>}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr className="border-table" key={index}>
                <td className="w-24 sm:w-28 prgf-td">{row.data}</td>
                <td className="w-24 sm:w-28 prgf-td">
                  {Array.isArray(row.hora)
                    ? row.hora.map((hora, idx) => <div key={idx}>{hora}</div>)
                    : row.hora}
                </td>
                <td className="w-[20rem] sm:w-[25rem]">
                  <span className="local">
                    <br />
                    {row.regiao}
                    <br />
                    {row.local}
                  </span>
                  <br />
                  {row.endereco}
                </td>
                {type === "tematicas" ? (
                  <>
                    <td className="w-40">{row.tema}</td>
                    <td className="text-center">
                      <a href={row.link} className="acessar-button btn-acessar">
                        Acesse
                        <div className="streaming-button">
                          <i className="fa-solid fa-arrow-right flecha"></i>
                        </div>
                      </a>
                    </td>
                  </>
                ) : (
                  <td className="text-center">
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
    </div>
  );
};

export default Table;