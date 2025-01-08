import React, { useState } from 'react';
import { Container } from '../style';
import { ButtonContact, ModalButton, ModalContainer, ModalContent, ModalForm, ModalInput, ModalSelect, Textarea } from './style';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
// import GenericModal from '../../Generic/GenericModal/index';

const modalElement = document.getElementById('modal');

export const HomeModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  // Modalni ochish
  const openModal = () => {
    setModalOpen(true);
  };

  //Modalni yopish
  const closeModal = () => {
    setModalOpen(false);
  };

  const savebtn = (e) => {
    if (!name) {

    }
    e.preventDefault();
    console.log("jjjghghj");

  };

  return (
    <Container>
      <ButtonContact onClick={openModal}>{t("Bog'lanish")}</ButtonContact>
      {
        modalOpen && createPortal(
          <ModalContainer>
            <ModalForm action="" onSubmit={savebtn}>
              <ModalContent>
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
                <ModalButton onClick={closeModal} >{t('Yuborish')}</ModalButton>
              </ModalContent>
            </ModalForm>
          </ModalContainer>, modalElement
        )
      }
    </Container>


  );
};

export default HomeModal;

