import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import '../../component/Carusel/style';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { Div, Img, Subtitle, Title, Wrapper } from '../../component/Carusel/style';
import { useTranslation } from 'react-i18next';

export const Carusel = () => {
  const { t } = useTranslation();
  const carusel = [
    {
      id: 1,
      src: "https://www.aqvo.uz/assets/11-CQJRg8SQ.jpg",
      title: t('carusel.title1'),
      subtitle: t('carusel.subtitle1'),
    },
    {
      id: 2,
      src: "https://www.aqvo.uz/assets/7-DVSEVqfJ.jpg",
      title: t('carusel.title2'),
      subtitle: t('carusel.subtitle2'),
    },
    {
      id: 3,
      src: "https://www.aqvo.uz/assets/3-MbMc4Rfg.jpg",
      title: t('carusel.title3'),
      subtitle: t('carusel.subtitle3'),
    },
  ];

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