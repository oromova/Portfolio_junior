
import React from 'react';
import { ContactTitle, Container, InfoBox, Link, Subtitle, Title, Wrapper } from './style';
import { ModalButton, ModalContent, ModalForm, ModalInput, ModalSelect, Textarea } from '../Home/HomeModal/style';
import { useTranslation } from 'react-i18next';

export const ContactUs = () => {
  const { t } = useTranslation();
  const savebtn = (e) => {
    if (!name) {

    }
    e.preventDefault();
    console.log("jjjghghj");

  };
  return (
    <Container>
      <Wrapper>
        <InfoBox>
          <Title>{t("'Aqvo' bilan yangicha ta'mni his eting.")}
          </Title>
          <Subtitle>{t("Aqvo brendi sizni yangi ta'mlarni kashf etishga taklif qiladi. Bizning mahsulotlarimiz har bir iste’molchiga sifatli va innovatsion yondashuv orqali yangi, o‘ziga xos ta’mni taqdim etadi. Aqvo – bu nafaqat ta’m, balki sog‘lom va halol mahsulotlar bilan yangi tajribani his qilish imkoniyati. Yangi ta’mni biz bilan birga kashf eting va haqiqiy sifatni his eting!")}
          </Subtitle>
          <ContactTitle>
            {t("Bog'lanish uchun telefon raqamingiz:")}
          </ContactTitle>
          <ContactTitle>
            <Link href='tel: +998957724444'>
              {t("Tel: +998957724444")}
            </Link>
          </ContactTitle>
          <ContactTitle>
            <Link href='tel: +998996440101'>
              {t("Tel: +998996440101")}
            </Link>
          </ContactTitle>
        </InfoBox>
        {/* Modal */}
        <ModalForm className='form' action="" onSubmit={savebtn}>
          <ModalContent className='content'>
            <ModalForm>
              <ModalInput placeholder={t("Ismingiz")} required />
              <ModalInput placeholder={t("Familiyangiz")} />
            </ModalForm>
            <ModalForm>
              <ModalInput placeholder={t("Telefon raqamingiz")} />
              <ModalInput placeholder={t("Telegram username")} />
            </ModalForm>
            <ModalForm>
              <ModalInput placeholder={t("Hudud")} />
              <ModalSelect name="mahsulot">
                <option className='option' value="mahsulot">{t("Mahsulot")}</option>
                <option className='option' value="franshiza">{t("Franshiza")}</option>
              </ModalSelect>
            </ModalForm>
            <Textarea placeholder={t("Xabar")}></Textarea>
            <ModalButton type='submit'>{t('Yuborish')}</ModalButton>
          </ModalContent>
        </ModalForm>
      </Wrapper>
    </Container>
  );
};
