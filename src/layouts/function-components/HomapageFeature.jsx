import { humanize } from "@/lib/utils/textConverter";
import * as PhosphorIcons from "@phosphor-icons/react";

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {feature_list.map((item, i) => {
        const IconComponent = PhosphorIcons[humanize(item.icon)] || PhosphorIcons.Question;

        return (
          <div
            key={i}
            className="flex flex-col sm:items-start bg-white p-6 rounded-lg"
          >
            {/* Ícono con fondo */}
            <div className="text-primary rounded-full p-3 flex mb-4">
              <IconComponent size={32} weight="regular" />
            </div>

            {/* Contenedor del Título y Contenido */}
            <div className="sm:text-left">
              <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm md:text-base">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
