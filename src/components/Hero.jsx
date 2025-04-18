import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import frame from "../assets/Frame 52.png";
import room2 from "../assets/room2.avif";
import room3 from "../assets/room3.avif";
import room5 from "../assets/room5.webp";
import room1 from "../assets/room1.webp";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageCarousel = () => {
  const images = [frame, room2, room3, room5, room1];

  return (
    <div className="w-full flex justify-center px-2 sm:px-4 md:px-6 lg:px-10 py-8">
      <div className="w-full max-w-[1600px]">
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;
