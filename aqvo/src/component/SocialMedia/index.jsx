import React from 'react';
import { Container, Link, LinkButton, Title, Wrapper } from './style';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import { Icons } from '../Home/style';


export const SocialMedia = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Title>{t('Sizning aqvo bilan lahzalaringiz')}</Title>
        <Icons.Logo className='logo' src={logo} alt="logo" />
      </Wrapper>
      <LinkButton>
        <Link href='https://www.instagram.com/aqvo_jiz/'>{t('Bizning Instagram')}</Link>
      </LinkButton>
      <LinkButton>
        <Link href='https://www.instagram.com/aqvo_jiz/'>{t('Bizning Telegram')}</Link>
      </LinkButton>
    </Container>
  );
};

export default SocialMedia;