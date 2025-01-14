import { Container, Description, LangOption, Main, Wrapper } from './style';
import { useTranslation } from 'react-i18next';
import Marquee from "react-fast-marquee";
import btnImg from "../../assets/logo-admin.svg";
import GenericNavbar from '../Generic/Navbar';
import { BgImg } from '../BgImg';
import Carusel from '../Carusel';
import SocialMedia from '../SocialMedia';
import Sliders from '../Sliders';
import { ContactUs } from '../ContactUs';
import { GenericCertificates } from '../Generic/Certificates';
import { GenericFooter } from '../Generic/Footer';
import GenericModal from '../Generic/Modal';

export const Home = () => {
  const { t } = useTranslation();
  const languages = localStorage.getItem('i18nextLng');

  return (
    <div>
      <Container>
        <Wrapper>
          {/* Navbar */}
          <GenericNavbar />
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
              <div style={{
                width: '158px', height: '158px',
                borderRadius: '50%', background: 'inherit',
                border: '1px solid rgb(236, 230, 230)', position: 'relative'
              }}
              >
                <div style={{
                  width: '145px', height: '145px',
                  textAlign: 'center', borderRadius: '50%', position: "absolute",
                  top: '6px', left: '6px', backgroundImage: "URL('btnImg')",
                }}>
                </div>
              </div>
            </Description>
            <GenericModal className='order' title={"Order"} />
          </Wrapper>
        </Container>
      </Main>
      <BgImg />
      <Carusel />
      <SocialMedia />
      <Sliders />
      <ContactUs />
      <GenericCertificates />
      <GenericFooter />
    </div >
  );
};

export default Home;