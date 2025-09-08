import { humanize } from "@/lib/utils/textConverter";
import * as PhosphorIcons from "@phosphor-icons/react";

const HomapageFeature = ({ feature_list = [] }) => {
  return (
    <div
      className="
        mt-10 grid grid-cols-1 gap-6
        sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
      "
      aria-label="Soluciones de seguridad física e informática"
    >
      {feature_list.map((item, i) => {
        const IconComponent =
          PhosphorIcons[humanize(item.icon)] || PhosphorIcons.Question;

        return (
          <article
            key={i}
            className="
              group flex flex-col rounded-xl bg-white
              border border-slate-200 shadow-sm
               transition-shadow duration-300
              overflow-hidden
            "
          >
            {/* Borde superior de acento */}
            <div className="h-1 w-full bg-secondary" />

            <div className="p-6 flex flex-col gap-4 grow">
              {/* Ícono destacado */}
              <div
                className="
                  inline-flex items-center justify-center
                  h-12 w-12 rounded-full text-white
                  bg-gradient-to-br from-primary/90 to-primary/60
                  ring-4 ring-primary/10
                "
                aria-hidden="true"
              >
                <IconComponent size={24} weight="bold" />
              </div>

              {/* Título + descripción */}
              <header>
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                {item.content && (
                  <p className="mt-2 text-sm md:text-base text-slate-600">
                    {item.content}
                  </p>
                )}
              </header>

              {/* CTA opcional por ítem */}
              {item?.cta_label && item?.cta_href && (
                <div className="mt-3">
                  <a
                    href={item.cta_href}
                    className="
                      inline-flex items-center justify-center
                      rounded-md border-2 border-accent text-accent
                      px-4 py-2 text-sm font-medium
                      hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent
                    "
                  >
                    {item.cta_label}
                  </a>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
