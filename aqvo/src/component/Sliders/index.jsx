import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper va SwiperSlide import qilamiz
// import "swiper/swiper-bundle.min.css"; // Swiper stilini import qilish
import { Autoplay } from 'swiper/modules';
import { ImgSlide, ImgSlideTwo, Wrapper } from "./style";
import Marquee from "react-fast-marquee";

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

  const images2 = [
    "https://www.aqvo.uz/assets/7-DVSEVqfJ.jpg",
    "https://www.aqvo.uz/assets/8-BJRDVkbT.jpg",
    "https://www.aqvo.uz/assets/9-CuY3LxGz.jpg",
    "https://www.aqvo.uz/assets/10-BSwqZfTZ.jpg",
    "https://www.aqvo.uz/assets/11-CQJRg8SQ.jpg",
    "https://www.aqvo.uz/assets/1-r4kQOm6b.jpg",
    "https://www.aqvo.uz/assets/2-D0A7qDd0.jpg",
    "https://www.aqvo.uz/assets/5-D1npURQz.jpg",
    "https://www.aqvo.uz/assets/4-CXjGOxnl.jpg",
    "https://www.aqvo.uz/assets/3-MbMc4Rfg.jpg"
  ];

  return (
    <div>
      <Marquee>
        {images.map((image, index) => (
          <ImgSlide src={image} alt={`Slide ${index + 1}`} />
        ))}
      </Marquee>
      <Marquee direction="right">
        {images2.map((image, index) => (
          <ImgSlideTwo src={image} alt={`Slide ${index + 1}`} />
        ))}
      </Marquee>

    </div>
  );
};

export default Sliders;
