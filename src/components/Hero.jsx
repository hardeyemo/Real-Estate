
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import frame from "../assets/Frame 52.png"
import room2 from "../assets/room2.avif"
import room3 from "../assets/room3.avif"
import room5 from "../assets/room5.webp"
import room1 from "../assets/room1.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';

export default () => {
  return (
   <div className='flex'>
     <Swiper className='flex flex-col gap-2 mt-10'
      modules={[ Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide className='flex items-center justify-center '><img className="w-[70%] rounded-2xl h-[500px]" src={frame} alt="" /></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center '><img className="w-[70%] rounded-2xl h-[500px]" src={room2} alt="" /></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><img className="w-[70%] rounded-2xl h-[500px]" src={room3} alt="" /></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><img className="w-[70%] rounded-2xl h-[500px]" src={room5} alt="" /></SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'><img className="w-[70%] rounded-2xl h-[500px]" src={room1} alt="" /></SwiperSlide>
      ...
    </Swiper>
   </div>
  );
};