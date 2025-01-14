import React from 'react';
import { Category, Container, ContainerContact, ContainerLang, Icons, LangOption, LangSelect, List, Navbar } from './style';
import { useTranslation } from 'react-i18next';
import logo from '../../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import GenericModal from '../Modal';

export const GenericNavbar = () => {
  const { t } = useTranslation();
  const languages = localStorage.getItem('i18nextLng');
  
    const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  };

  return (
    <Container>
      <Navbar>
        <Category>
          <List>
            <List.Item>
              <NavLink className={'link'} to="/home">{t('Bosh sahifa')}</NavLink>
            </List.Item>
            <List.Item>
              <NavLink className={'link'}  to="/about">{t('Biz haqimizda')}</NavLink>
            </List.Item>
          </List>
        </Category>
        {/* Logo */}
        <Category>
          <Icons.Logo src={logo} alt="logo" />
        </Category>
        {/* Change Languages, Contact */}
        <Category>
          <ContainerLang>
            <LangSelect name="Lng" id="lng" onChange={handleChange} value={languages}>
              <LangOption value='uz'>Uzb</LangOption>
              <LangOption value='ru'>Ru</LangOption>
              <LangOption value='en'>En</LangOption>
            </LangSelect>
            {/* <DropIcon /> */}
          </ContainerLang>
          {/* Contact */}
          <ContainerContact>
            <GenericModal title={t("Bog'lanish")} navbar={true} />
          </ContainerContact>
        </Category>
      </Navbar>
    </Container>
  );
};

export default GenericNavbar;