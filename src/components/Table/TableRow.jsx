import React from "react";
import RenderLinkButton from "../button/renderLinkButton";

const TableRow = ({ row, isTematica }) => {
  return (
    <tr className="border-table">
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
      {isTematica && <td className="w-40 sm:w-50 prgf-td">{row.tema}</td>}
      <td className="text-center">
        <RenderLinkButton link={row.link || row.streaming} />
      </td>
    </tr>
  );
};

export default TableRow;