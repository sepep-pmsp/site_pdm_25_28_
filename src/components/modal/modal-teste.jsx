import { useState } from "react";
import ModalAudiencias from "./ModalAudiences";



export default function ModalTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Abrir Modal</button>
      <ModalAudiencias isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
