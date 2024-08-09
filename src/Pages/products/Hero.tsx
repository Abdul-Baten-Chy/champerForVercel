import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img3 from "../../assets/Hero/baner3.jpg";
import img1 from "../../assets/Hero/banner1.jpg";
import {
  default as img2,
  default as img4,
} from "../../assets/Hero/banner2.jpg";

import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className=" max-h-[300px] max-w-[1280px] mx-auto  relative mt-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper  max-h-[300px]"
      >
        <SwiperSlide>
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 px-14 py-20 z-10">
            Elevate Your Ride with{" "}
            <span className="font-bold text-[#36D6A8]">Premium</span> Comfort &
            Style
          </h2>
          <img src={img1} alt="" className="object-contain overflow-hidden" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 px-14 py-20 z-10 ">
            Luxury and Comfort{" "}
            <span className="font-bold text-[#36D6A8]">for Every</span>
            <span className="font-bold text-[#36D6A8] "> Journey</span>
          </h2>
          <img src={img2} alt="" className="object-contain overflow-hidden" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 px-14 py-20 z-10">
            Elevate Your Ride with{" "}
            <span className="font-bold text-[#36D6A8]">Premium</span> Comfort &
            Style
          </h2>
          <img src={img3} alt="" className="object-contain overflow-hidden" />
        </SwiperSlide>
        <SwiperSlide>
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 px-14 py-20 z-10 ">
            Luxury and Comfort{" "}
            <span className="font-bold text-[#36D6A8]">for Every</span>
            <span className="font-bold text-[#36D6A8] "> Journey</span>
          </h2>
          <img src={img4} alt="" className="object-contain overflow-hidden" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
