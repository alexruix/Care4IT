import "swiper/css";
import "swiper/css/pagination";
import { AiFillCheckCircle } from "react-icons/ai";

const TestimonialSlider = ({ list }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
      {list.map((item, i) => (
        <div key={`feature-${i}`} className="flex">
          <div className="review flex flex-col  bg-white p-6 shadow-md rounded-lg border border-gray-200">
            {/* Autor */}
            <h4 className="text-lg font-semibold text-gray-800">{item.author}</h4>

            {/* Contenido */}
            <p className="text-gray-600">{item.content}</p>

            {/* Lista de ítems */}
            {item.listItem && item.listItem.length > 0 && (
              <ul className="mt-4">
                {item.listItem.map((listItem, index) => (
                  <li key={`list-item-${index}`} className="flex items-start gap-2 mb-3">
                    <AiFillCheckCircle className="text-primary min-w-4 h-4" />
                    <span className="text-gray-700 -mt-1">{listItem}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
