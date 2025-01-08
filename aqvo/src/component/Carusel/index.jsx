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
      subtitle:
        "Aqvo - sifat va halollikni o‘zida mujassam etgan, innovatsion yondashuv orqali mahsulotlarini yangicha ta’m va zamonaviy dizaynda taqdim etuvchi brend. O‘zbekistonda birinchi bo‘lib jiz mahsulotlarini yuqori sifat va halollik tamoyillariga asoslangan holda ishlab chiqarishni yo‘lga qo‘ygan Aqvo, mijozlar ishonchini qozonib kelmoqda",
    },
    {
      id: 2,
      src: "https://www.aqvo.uz/assets/7-DVSEVqfJ.jpg",
      title: t('carusel.title1'),
      subtitle:
        "Aqvo brendi hozirda mol go'shtli, tovuq go'shtli va qo'y go'shtli mahsulotlar bilan iste'molchilarga xizmat ko'rsatmoqda. Har bir mahsulotimiz o'ziga xos yuqori sifat, yangicha ta'm va halollik tamoyillariga asoslangan holda ishlab chiqariladi. Aqvo - bu mazali va ishonchli mahsulotlarning yorqin timsoli.",
    },
    {
      id: 3,
      src: "https://www.aqvo.uz/assets/3-MbMc4Rfg.jpg",
      title: "Yetkazib berish ko'lami",
      subtitle:
        "Aqvo brendi o‘z mahsulotlarini keng hududlarga yetkazib berishni tashkil etib, sifat va tezkorlikni birinchi o‘ringa qo‘yadi. Bizning yetkazib berish tarmog‘imiz orqali mahsulotlar O‘zbekistonning barcha hududlariga o‘z vaqtida yetib boradi. Aqvo – har doim sizga yaqin, har doim ishonchli.",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={5}
      slidesPerView={1}
      pagination={true}
      // autoplay={{
      //   delay: 1500,
      //   disableOnInteraction: false
      // }}
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