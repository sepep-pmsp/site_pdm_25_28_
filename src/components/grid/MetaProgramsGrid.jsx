import React from "react";
import MetaProgramCard from "../card/MetaProgramCard";
import metasData from "../../data/metasData.json";

const MetaProgramsGrid = () => {
  return (
    <div className="meta-grid">
      {metasData.map((program) => (
        <MetaProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
};

export default MetaProgramsGrid;
