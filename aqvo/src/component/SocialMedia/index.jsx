import React from 'react';
import { Container, Title } from './style';
import { useTranslation } from 'react-i18next';


export const SocialMedia = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Title>{t('Sizning aqvo bilan lahzalaringiz')}</Title>
    </Container>
  );
};
