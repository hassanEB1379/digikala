import { Children } from "react";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination]);

const Slider = ({ children, gap, ...rest }) => {
   return (
      <Swiper spaceBetween={gap} {...rest}>
         {Children.map(children, item => (
            <SwiperSlide>{item}</SwiperSlide>
         ))}
      </Swiper>
   );
};

export default Slider;
