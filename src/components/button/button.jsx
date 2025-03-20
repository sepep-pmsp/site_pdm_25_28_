import "../../style/_button.css"; // Importa os estilos

export default function CustomButton({
  type,
  label,
  target,
  onClick,
  className
    }) {
  const handleClick = () => {
    if (type === "scroll") {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
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

  // Define a classe padrão com base no tipo do botão
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
