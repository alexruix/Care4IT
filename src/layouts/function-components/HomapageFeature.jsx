import { humanize } from "@/lib/utils/textConverter";
import * as PhosphorIcons from "@phosphor-icons/react";

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3">
      {feature_list.map((item, i) => {
        const IconComponent = PhosphorIcons[humanize(item.icon)];

        // Verifica si el ícono existe
        if (!IconComponent) {
          console.warn(`Ícono no encontrado para: ${humanize(item.icon)}`);
          return null; // O podrías renderizar un ícono genérico aquí
        }

        return (
          <div
            key={i}
            className="flex flex-col gap-0 items-start p-5 space-y-4"
          >
            {/* Ícono */}
            <span className="icon mb-2">
              <IconComponent size={32} weight="regular" />
            </span>

            {/* Contenedor del Título y Contenido */}
            <div className="flex flex-col items-start">
              <h3 className="h4 text-xl lg:text-2xl">{item.title}</h3>
              <p className="">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
