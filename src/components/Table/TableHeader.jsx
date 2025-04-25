import React from "react";

const TableHeader = ({ isTematica }) => (
  <thead>
    <tr className="head-table">
      <th className="w-24 sm:w-28 text-base sm:text-xl">DATA</th>
      <th className="w-24 sm:w-28 text-base sm:text-xl">HORA</th>
      <th className="w-[15rem] sm:w-[25rem] text-base sm:text-xl">LOCAL</th>
      {isTematica && (
        <th className="w-40 sm:w-50 text-base sm:text-xl">TEMA</th>
      )}
      <th className="w-40 sm:w-50 text-base sm:text-xl">LINK PARA REUNIÃO</th>
    </tr>
  </thead>
);

export default TableHeader;