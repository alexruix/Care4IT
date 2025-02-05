import { useState } from "react";

const CardExtension = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded); // Cambiar el estado
    console.log("Estado expandido:", !isExpanded); // Para verificar en consola
  };

  return (
    <div className="flex flex-col gap-2 p-6 rounded-lg">
      <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>

      {/* Mostrar descripción truncada o completa según el estado */}
      <p className="mt-2">
        {isExpanded ? description : description}
      </p>

      {/* Botón para expandir o colapsar la descripción */}
      {/* <button
        className="mt-4 text-blue-600 hover:text-blue-800"
        onClick={handleClick}
      >
        {isExpanded ? "Leer menos" : "Leer más"}
      </button> */}
    </div>
  );
};

export default CardExtension;
