import { useSwiper } from "swiper/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const SlideNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute inset-0 flex items-center justify-between p-3 pointer-events-none">
      <div
        className="text-green-500 text-2xl p-2 bg-white bg-opacity-50 rounded-full shadow-lg cursor-pointer z-10 pointer-events-auto"
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronLeft className="pointer-events-none text-2xl" />
      </div>
      <div
        className="text-green-500 text-2xl p-2 bg-white bg-opacity-50 rounded-full shadow-lg cursor-pointer z-10 pointer-events-auto"
        onClick={() => swiper.slideNext()}
      >
        <FaChevronRight className="pointer-events-none text-2xl" />
      </div>
    </div>
  );
};

export default SlideNavButtons;
