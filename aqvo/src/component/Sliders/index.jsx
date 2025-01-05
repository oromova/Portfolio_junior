import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper va SwiperSlide import qilamiz
// import "swiper/swiper-bundle.min.css"; // Swiper stilini import qilish
import { Autoplay } from 'swiper/modules';
import { ImgSlide, Wrapper } from "./style";

const Sliders = () => {
  // Rasmlar ro'yxati
  const images = [
    "https://www.aqvo.uz/assets/2-BrW5ldnW.jpg",
    "https://www.aqvo.uz/assets/3-CC1Fv5Ko.jpg",
    "https://www.aqvo.uz/assets/4-B1ud6FZe.jpg",
    "https://www.aqvo.uz/assets/5-DgqT6XoF.jpg",
    "https://www.aqvo.uz/assets/6-Cc5vAtLH.jpg",
    "https://www.aqvo.uz/assets/7-Dg9MnOAk.jpg",
    "https://www.aqvo.uz/assets/8-1IjexHLz.jpg",
    "https://www.aqvo.uz/assets/9-VXZ4ZmsG.jpg",
    "https://www.aqvo.uz/assets/1-DPymZrpy.jpg",
  ];

  return (
    <Wrapper>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 500 }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ImgSlide src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default Sliders;
