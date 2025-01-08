import React from 'react';
import { Container, Instagram, Link, LinkDiv, Slogan } from './style';
import { useTranslation } from 'react-i18next';



export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Slogan>
        {t("Siz izlagan ta'm, sifat, poklik va o‘zgachalik... Barchasi bir nuqtada jamlanib, “Aqvo”ga aylanadi!")}
      </Slogan>
      <LinkDiv>
        <Instagram>
        
        </Instagram>
      </LinkDiv>
      <Slogan>© All rights reserved</Slogan>
      <a href="https://www.limsa.uz/" target="_blank" className='link'>
      Created by Limsa
      </a>
    </Container>
  );
};
