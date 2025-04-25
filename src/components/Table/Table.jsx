import React, { useState, useEffect } from "react";
import audienciasData from "../../data/audienciasData.json";
import "./table.css";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

const Table = ({ type }) => {
    const [tableData, setTableData] = useState([]);
  
    useEffect(() => {
      if (audienciasData[type]) {
        setTableData(audienciasData[type]);
      }
    }, [type]);
  
    if (!tableData || tableData.length === 0)
      return <p className="text-center text-gray-500">Dados não encontrados.</p>;
  
    const isTematica = type === "tematicas";
  
    return (
      <div className="table-wrapper">
        <div className="table-container">
          <table className="table">
            <TableHeader isTematica={isTematica} />
            <tbody>
              {tableData.map((row, index) => (
                <TableRow key={index} row={row} isTematica={isTematica} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Table;