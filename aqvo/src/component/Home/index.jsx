import { Category, Container, ContainerContact, ContainerLang, Description, Icons, LangOption, LangSelect, List, Main, Navbar, Wrapper } from './style';
import logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';
import Marquee from "react-fast-marquee";
import Modal from './HomeModal';
// import homeImg from '../../assets/homeBack.jpg';

export const Home = () => {
  const { t, i18n } = useTranslation();
  const languages = localStorage.getItem('i18nextLng');

  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  };


  return (
    <div>
      <Container>
        <Wrapper>
          {/* Navbar */}
          <Navbar>
            {/* Home,About */}
            <Category>
              <List>
                <List.Item>
                  <List.A>{t('Bosh sahifa')}</List.A>
                </List.Item>
                <List.Item>
                  <List.A>{t('Biz haqimizda')}</List.A>
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
                <Modal />
              </ContainerContact>

            </Category>
          </Navbar>
        </Wrapper>
      </Container>
      {/* Body */}
      <Main>
        <Main.Box>
          <Marquee>
            <Main.Title>
              {t('Tabiiy mahsulotlar! Sifat va ishonch!')}
            </Main.Title>
          </Marquee>
        </Main.Box>

        <Container>
          <Wrapper>
            <Description>
              <Description.Subtitle>
                {t('AQVO – O‘zbekistonda birinchi bo‘lib sifat va halollikni o‘zida mujassam etgan, jiz mahsulotlarini yangicha ta’m va zamonaviy dizaynda taqdim etuvchi yetakchi brend.')}
              </Description.Subtitle>
            </Description>
          </Wrapper>
        </Container>
      </Main>
    </div >
  );
};

export default Home;