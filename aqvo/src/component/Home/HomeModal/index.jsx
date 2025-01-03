import React, { useState } from 'react';
import { Container } from '../style';
import { ButtonContact, ModalButton, ModalContainer, ModalContent, ModalForm, ModalInput, ModalSelect, Textarea } from './style';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

const modalElement = document.getElementById('modal');

export const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Modalni ochish
  const openModal = () => {
    setModalOpen(true);
  };

  // Modalni yopish
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <ButtonContact onClick={openModal}>{t("Bog'lanish")}</ButtonContact>
      {
        modalOpen && createPortal(
          <ModalContainer>
            <ModalContent>

              <ModalForm>
                <ModalInput placeholder={t("Ismingiz")} />
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
              <ModalButton onClick={closeModal}>{t('Yuborish')}</ModalButton>
            </ModalContent>
          </ModalContainer>, modalElement
        )
      }

    </Container>


  );
};

export default Modal;

