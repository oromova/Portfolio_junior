import React, { useState } from 'react';
import { Container } from '../style';
import { ButtonClose, ButtonContact, ModalButton, ModalContainer, ModalContent, ModalForm, ModalInput, ModalSelect, Textarea } from './style';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
// import GenericModal from '../../Generic/GenericModal/index';
import btnImg from "../../../assets/logo-admin.svg";
import axios from 'axios';
const modalElement = document.getElementById('modal');

export const HomeModal = ({ title, navbar }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [region, setRegion] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    surname: ''
  })

  // Modalni ochish
  const openModal = () => {
    setModalOpen(true);
  };

  //Modalni yopish
  const closeModal = () => {
    setModalOpen(false);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    setLoading(true);
    const token = '7850352941:AAHQ4dDT49wqYx_UW87O_XXPeIJoSyjcf9M';
    const chat_id = 6135129095;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `Ismi: ${name}\nFamiliyasi: ${surname}\nTelefon raqami: ${tel}\nTelegram username: ${username}\nHudud: ${region}\nMessage: ${message}`;

    axios({
      url: url,
      method: "POST",
      data: {
        "chat_id": chat_id,
        "text": messageContent,

      }
    }).then((res) => {
      alert("Muvaffaqiyatli yuborildi");
    }).catch((error) => {
      console.log("Yuborishda xatolik", error);
    }).finally(() => {
      setLoading(false);
    });
  };
  return (
    <Container>
      {navbar ?
        <ButtonContact onClick={openModal}>{title}</ButtonContact>
        :
        <button onClick={openModal}>
          <img src={btnImg} alt="" />
        </button>}
      {
        modalOpen && createPortal(
          <ModalContainer>
            <ModalForm action="">
              <ModalContent>
                <ModalForm>
                  <ButtonClose onClick={closeModal}> + </ButtonClose>
                  <ModalInput placeholder={t("Ismingiz")} id='name'required onChange={(e) => setName(e.target.value)} />
                  <span id="nameError" class="error-message" style="display: none;">Ismni kiriting!</span>
                  <ModalInput placeholder={t("Familiyangiz")} id='surname' onChange={(e) => setSurname(e.target.value)} />
                </ModalForm>
                <ModalForm>
                  <ModalInput placeholder={t("Telefon raqamingiz")} id='phone' onChange={(e) => setTel(e.target.value)} />
                  <ModalInput placeholder={t("Telegram username")} id='telegram' onChange={(e) => setUsername(e.target.value)} />
                </ModalForm>
                <ModalForm>
                  <ModalInput placeholder={t("Hudud")} id='area' onChange={(e) => setRegion(e.target.value)} />
                  <ModalSelect name="mahsulot">
                    <option className='option' value="mahsulot">{t("Mahsulot")}</option>
                    <option className='option' value="franshiza">{t("Franshiza")}</option>
                  </ModalSelect>
                </ModalForm>
                <Textarea placeholder={t("Xabar")} id='textarea' onChange={(e) => setMessage(e.target.value)}></Textarea>
                <ModalButton type='submit' onClick={sendMessage}>{t('Yuborish')}</ModalButton>
              </ModalContent>
            </ModalForm>
          </ModalContainer>, modalElement
        )
      }
    </Container >


  );
};

export default HomeModal;

