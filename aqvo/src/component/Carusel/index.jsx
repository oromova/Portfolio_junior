import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import '../../component/Carusel/style';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { carusel } from '../../mock/carusel';
import { Div, Img, Subtitle, Title, Wrapper } from '../../component/Carusel/style';

export const Carusel = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={5}
      slidesPerView={1}
      pagination={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false
      }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <Wrapper>
        {
          carusel.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Img src={item.src} />
                <Div>
                  <Title>{item.title}</Title>
                  <Subtitle>{item.subtitle}</Subtitle>
                </Div>

              </SwiperSlide>
            );
          })
        }
      </Wrapper>
    </Swiper >
  );
};

export default Carusel;