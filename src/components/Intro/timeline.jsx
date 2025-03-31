import React, { useEffect, useState } from "react";
import timelineData from "../../data/elaboracao_metas.json";

export default function Timeline() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(timelineData);
  }, []);

  return (
    <section className="timeline-container">
      {data.map((item) => (
        <div key={item.id} className="timeline-item">
          <span>{item.title} - {item.date}</span>
          {item.details && (
            <ul className="timeline-details">
              {item.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}