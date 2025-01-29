import "swiper/css";
import "swiper/css/pagination";
import { AiFillCheckCircle } from "react-icons/ai";

const TestimonialSlider = ({ list }) => {
  return (
    <div className="reviews-grid grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-8">
      {list.map((item, i) => (
        <div key={`feature-${i}`}>
          <div className="review">
            <h4 className="mb-4">{item.author}</h4>
            <p>{item.content}</p>
            {item.listItem && item.listItem.length > 0 && (
              <ul className="flex flex-col gap-4">
                {item.listItem.map((listItem, index) => (
                  <li
                    key={`list-item-${index}`}
                    className="flex items-center gap-2"
                  >
                    <AiFillCheckCircle className="text-primary min-w-4 h-4" />
                    {listItem}
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

