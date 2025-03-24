import "../../style/_button.css"; // Importa os estilos
import { scrollToSection } from "../../utils/scroll"; // Importa a função de scroll animado

export default function CustomButton({
  type,
  label,
  target,
  onClick,
  className
}) {
  const handleClick = () => {
    if (type === "scroll") {
      scrollToSection(target); // Agora usa a animação suave personalizada
    } else if (type === "download") {
      const link = document.createElement("a");
      link.href = target;
      link.download = target.split("/").pop();
      link.click();
    } else if (type === "modal") {
      onClick && onClick();
    } else if (type === "link") {
      window.location.href = target;
    }
  };

  const buttonClass = `custom-button ${
    type === "scroll"
      ? "btn-scroll"
      : type === "download"
      ? "btn-download"
      : type === "modal"
      ? "btn-modal"
      : type === "link"
      ? "btn-link"
      : ""
  } ${className || ""}`;

  return (
    <button onClick={handleClick} className={buttonClass}>
      {label}
    </button>
  );
}
